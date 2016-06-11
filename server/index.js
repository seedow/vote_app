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

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  winston.log('info', 'got a request');
  next();
});

// serve the landing page 
server.use("/", express.static(pathToStatic));

server.get("/getCandidates", function(req, res) {
	dbOps.getCandidates(function(err, result) {
		res.send(result);
	})
})

server.listen(serverPort, function() {
	winston.log('info', 'Vote app started on port %s', serverPort)
});