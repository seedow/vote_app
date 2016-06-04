var express = require('express');
var server = express();
//dependencies
var winston = require("winston");

//server configs
var serverPort = 3000;
var pathToStatic = "../client/"

//custom modules
var candidate = require("./modules/candidate"),
	candidatesMockup = require("./modules/mockups/candidatesMockup")

// serve the landing page 
server.use("/", express.static(pathToStatic));

server.get("/getCandidates", function(req,res){
	winston.log('info', 'got getCandidates request')
	res.send(candidatesMockup);
})

server.listen(serverPort, function() {
	winston.log('info', 'Vote app started on port %s', serverPort)
});