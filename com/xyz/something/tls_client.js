/*
* Node.js TLS/SSL
* https://www.javatpoint.com/nodejs-tls-ssl
*
* What is TLS/SSL
* TLS stands for Transport Layer Security.
* It is the successor to Secure Sockets Layer (SSL). TLS along with SSL is used for cryptographic protocols to secure communication over the web.
*
* TLS uses public-key cryptography to encrypt messages. It encrypts communication generally on the TCP layer.
*
* What is public-key cryptography
* In public-key cryptography, each client and each server has two keys:
* public key and private key. Public key is shared with everyone and private key is secured. To encrypt a message,
* a computer requires its private key and the recipient?s public key. On the other hand, to decrypt the message, the recipient requires its own
* */

// You have to use require('tls') to access this module.
// var tls = require('tls');

// The tls module uses OpenSSL to attain Transport Layer Security and Secure Socket Layer.
// TLS/SSL is a public/private key infrastructure. Each client and each server must have a private key.
// A private key can be created like this:

tls = require('tls');

function connected(stream) {
    if (stream) {
        // socket connected
        stream.write("GET / HTTP/1.0\n\rHost: encrypted.google.com:443\n\r\n\r");
    } else {
        console.log("Connection failed");
    }
}

// needed to keep socket variable in scope
var dummy = this;
// try to connect to the server
dummy.socket = tls.connect(443, 'encrypted.google.com', function () {
    // callback called only after successful socket connection
    dummy.connected = true;
    if (dummy.socket.authorized) {
        // authorization successful
        dummy.socket.setEncoding('utf-8');
        connected(dummy.socket);
    } else {
        // authorization failed
        console.log(dummy.socket.authorizationError);
        connected(null);
    }
});
dummy.socket.addListener('data', function (data) {
    // received data
    console.log(data);
});
dummy.socket.addListener('error', function (error) {
    if (!dummy.connected) {
        // socket was not connected, notify callback
        connected(null);
    }
    console.log("FAIL");
    console.log(error);
});
dummy.socket.addListener('close', function () {
    // do something
});