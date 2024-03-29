/*
* Node.js Web Module
* https://www.javatpoint.com/nodejs-web-modules
*
* What is Web Server

Web Server is a software program that handles HTTTP requests sent by HTTP clients like web browsers, and returns web pages in response to the clients. Web servers usually respond with html documents along with images, style sheets and scripts.

Most of the web server support server side scripts using scripting language or redirect to application server which perform the specific task of getting data from database, perform complex logic etc. and then sends a result to the HTTP client through the Web server.

Apache web server is one of the most commonly used web server. It is an open source project.
Web Application Architecture

A web application can be divided in 4 layers:

    Client Layer: The Client layer contains web browsers, mobile browsers or applications which can make HTTP request to the web server.
    Server Layer: The Server layer contains Web server which can intercepts the request made by clients and pass them the response.
    Business Layer: The business layer contains application server which is utilized by web server to do required processing. This layer interacts with data layer via data base or some external programs.
    Data Layer: The Data layer contains databases or any source of data.
* */
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer(function (request, response) {
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            //Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body
        response.end();
    });
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
// http://127.0.0.1:8081/index.html