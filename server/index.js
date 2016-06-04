var express = require('express');
var server = express();
//server configs
var serverPort = 3000,
	pathToStatic = "../client/";

//dependencies
var winston = require("winston");

//custom modules
var candidate = require("./modules/candidate"),
	candidatesMockup = require("./modules/mockups/candidatesMockup"),
	dbOps = require("./modules/dbOps")

dbOps.clean();

// serve the landing page 
server.use("/", express.static(pathToStatic));

server.get("/getCandidates", function(req, res) {
	winston.log('info', 'got getCandidates request');
	dbOps.getCandidates(function(result) {
		res.send(result);
	})

})

server.listen(serverPort, function() {
	winston.log('info', 'Vote app started on port %s', serverPort)
});