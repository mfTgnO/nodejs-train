/*
* Updating Documents
* http://mongodb.github.io/node-mongodb-native/3.3/tutorials/crud/#specify-a-data-type
*
* The updateOne and updateMany methods exist on the Collection class and are used to update and upsert documents.
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

    const col = db.collection('updates');
    // Insert multiple documents
    col.insertMany([{a: 1}, {a: 2}, {a: 2}], function (err, r) {
        assert.equal(null, err);
        assert.equal(3, r.insertedCount);

        // Update a single document
        col.updateOne({a: 1}, {$set: {b: 1}}, function (err, r) {
            assert.equal(null, err);
            assert.equal(1, r.matchedCount);
            assert.equal(1, r.modifiedCount);

            // Update multiple documents
            col.updateMany({a: 2}, {$set: {b: 1}}, function (err, r) {
                assert.equal(null, err);
                assert.equal(2, r.matchedCount);
                assert.equal(2, r.modifiedCount);

                // Upsert a single document
                col.updateOne({a: 3}, {$set: {b: 1}}, {
                    upsert: true
                }, function (err, r) {
                    assert.equal(null, err);
                    assert.equal(0, r.matchedCount);
                    assert.equal(1, r.upsertedCount);
                    client.close();
                });
            });
        });
    });
});