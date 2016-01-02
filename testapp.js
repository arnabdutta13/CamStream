/**
 * http://usejsdoc.org/
 */
var fs = require("fs");
//var socketio = require("socket.io");
var http = require("http");
var url = require("url");

var handler = function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	console.log(pathname.substr(1));
	if (pathname.substr(1) === '') {
		fs.readFile(__dirname + "/testindex.html", function(error, data) {
			if (error) {
				response.writeHead(500, {
					"Content-Type" : "text/plain"
				});
				return response.end("Error loading index.html");
			} else {
				response.writeHead(200, {
					"Content-Type" : "text/html"
				});
				return response.end(data);
			}

		});
	}
	if (pathname.substr(1) === 'image_stream.jpg') {
		fs.readFile(__dirname + "/stream/image_stream.jpg", function(error, data) {
			if (error) {
				response.writeHead(500, {
					"Content-Type" : "text/plain"
				});
				return response.end("Error loading image_stream.jpg");
			} else {
				response.writeHead(200, {
					"Content-Type" : "text/html"
				});
				return response.end(data);
			}

		});
	}
	if (pathname.substr(1) === 'favicon.ico') {
		fs.readFile(__dirname + "/favicon.ico", function(error, data) {
			if (error) {
				response.writeHead(500, {
					"Content-Type" : "text/plain"
				});
				return response.end("Error loading favicon.png");
			} else {
				response.writeHead(200, {
					"Content-Type" : "text/html"
				});
				return response.end(data);
			}

		});
	}
	
};

var app = http.createServer(handler);
//var io = socketio.listen(app);
app.listen(8003);
console.log("Server Running");