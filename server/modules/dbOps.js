var MongoClient = require("mongodb").MongoClient,
	winston = require("winston"),
	assert = require("assert")

//db settings
var host = "52.28.182.213:27017";
var mongodbUrl = "mongodb://"+host+"/vote_app"

//custom modules
var candidatesMockup = require("./mockups/candidatesMockup")
var availableCollections = {
	"candidates": "candidates",
	"votes": "votes",
	"users": "users"
}
var dbCollections = {};
var dbUtils = {
	connect: function(callback) {
		MongoClient.connect(mongodbUrl, function(err, db) {
			// console.log(err)
			callback && callback(db);
			// db.close();
		})
	},
	formatResults: function(results, db, callback) {
		var formatedResults = [];
		results.each(function(err, entry) {
			if (entry != null) {
				formatedResults.push(entry)
			} else {
				db.close();
				callback(formatedResults);
			}
		})
	}
}



var dbOps = {
	clean: function() {
		dbUtils.connect(function(db) {
			// var myDB = MongoClient.db("vote_app");
			var candidates = db.collection(availableCollections["candidates"]);
			candidates.remove(function() {
				candidates.insertMany(candidatesMockup, function() {
					db.close();
				})
			})
		})
	},
	getCandidates: function(callback) {
		dbUtils.connect(function(db) {
			var candidates = db.collection(availableCollections["candidates"]).find();
			dbUtils.formatResults(candidates, db, function(result) {
				callback(result);
			});
		})
	}
}

module.exports = dbOps;
