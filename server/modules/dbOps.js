var MongoClient = require("mongodb").MongoClient,
	winston = require("winston"),
	assert = require("assert")

//db settings
var host = "52.28.182.213:27017";
var mongodbUrl = "mongodb://"+host+"/vote_app"

var db = require('monk')(mongodbUrl);

//custom modules
var candidatesMockup = require("./mockups/candidatesMockup"),
	dbUtils = require("./dbUtils.js");

var candidatesCollection = db.get('candidates');

var dbOps = {
	clean: function() {
		candidatesCollection.remove();
		dbUtils.insertMany(candidatesCollection, candidatesMockup);
		// db.close();
	},
	getCandidates: function(callback) {
		candidatesCollection.find({}, callback);
	}
}

module.exports = dbOps;
