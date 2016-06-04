var express = require('express');
var server = express();
//dependencies
var winston = require("winston");



var serverPort = 3000;
var pathToStatic = "../client/"

// serve the landing page 
server.use("/", express.static(pathToStatic));

server.listen(serverPort, function() {
	winston.log('info', 'Vote app started on port %s', serverPort)
});