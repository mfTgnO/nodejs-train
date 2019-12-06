/*
* Removing Documents
* http://mongodb.github.io/node-mongodb-native/3.3/tutorials/crud/#specify-a-data-type
*
* The deleteOne and deleteMany methods exist on the Collection class and are used to remove documents from MongoDB.
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

    const col = db.collection('removes');
    // Insert multiple documents
    col.insertMany([{a: 1}, {a: 2}, {a: 2}], function (err, r) {
        assert.equal(null, err);
        assert.equal(3, r.insertedCount);

        // Remove a single document
        col.deleteOne({a: 1}, function (err, r) {
            assert.equal(null, err);
            assert.equal(1, r.deletedCount);

            // Update multiple documents
            col.deleteMany({a: 2}, function (err, r) {
                assert.equal(null, err);
                assert.equal(2, r.deletedCount);
                client.close();
            });
        });
    });
});