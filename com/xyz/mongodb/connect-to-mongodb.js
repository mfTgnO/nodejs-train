/*
* Node.js Connect to MongoDB – Example
* https://www.tutorialkart.com/nodejs/node-js-connect-to-mongodb/
* */
// URL at which MongoDB service is running
var url = "mongodb://192.168.2.167:27017";

// A Client to MongoDB
var MongoClient = require('mongodb').MongoClient;

// Make a connection to MongoDB Service
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;
    console.log("Connected to MongoDB!");
    db.close();
});