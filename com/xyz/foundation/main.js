/*
* Node.js First Example
* https://www.javatpoint.com/nodejs-first-example
* */
var http = require("http");
http.createServer(function (req, resp) {
    // Send the HTTP header
    // Content Type: 200 OK
    resp.writeHead(200, {'Content-Type': 'text/json'});
    // Send the response body as "Hello World"
    resp.end('Hello World\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');