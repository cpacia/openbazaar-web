var http = require('http');
var app = require('./javascript/app');

http.createServer(app.handleRequest).listen(8080);