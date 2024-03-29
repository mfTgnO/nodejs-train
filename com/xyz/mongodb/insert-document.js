/*
* Insert a Document
* http://mongodb.github.io/node-mongodb-native/3.3/quick-start/quick-start/
* */
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = "mongodb://192.168.2.167:27017";

// Database Name
const dbName = 'db_x';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    db.collection('customers').insertOne({a: 1}, function (err, r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);

        // Insert multiple documents
        db.collection('customers').insertMany([{a: 2}, {a: 3}], function (err, r) {
            assert.equal(null, err);
            assert.equal(2, r.insertedCount);

            client.close();
        });
    });
});