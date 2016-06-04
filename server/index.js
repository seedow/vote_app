var express = require('express');
var server = express();
//dependencies
var winston = require("winston");

//server configs
var serverPort = 3000;
var pathToStatic = "../client/"

//custom modules
var candidate = require("./modules/candidate");

// serve the landing page 
server.use("/", express.static(pathToStatic));

server.listen(serverPort, function() {
	winston.log('info', 'Vote app started on port %s', serverPort)
});