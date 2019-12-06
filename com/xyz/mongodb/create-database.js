/*
* Node.js MongoDB Create Database
* https://www.javatpoint.com/nodejs-mongodb-create-database
*
* To create a database in MongoDB, First create a MongoClient object and specify a connection URL with the correct ip address
* and the name of the database which you want to create.
*
* Note: MongoDB will automatically create the database if it does not exist, and make a connection to it.
* */
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.2.167:27017/db_c";
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});*/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = "mongodb://192.168.2.167:27017";
// Database Name
const dbName = 'db_y';
/*MongoClient.connect(url, function(err, db) {   //here db is the client obj
    if (err) throw err;
    var dbase = db.db("db_y");
    db.close();
});*/

// http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/
// http://mongodb.github.io/node-mongodb-native/3.3/
// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    client.close();
});