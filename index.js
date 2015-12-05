var http = require('http');
var mongoose = require('mongoose');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

server.listen(8081);
