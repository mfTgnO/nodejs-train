/*
* findOneAndUpdate, findOneAndDelete, and findOneAndReplace
* http://mongodb.github.io/node-mongodb-native/3.3/tutorials/crud/#specify-a-data-type
*
* The three methods findOneAndUpdate, findOneAndDelete and findOneAndReplace are special commands which allow the user to update or upsert
* a document and have the modified or existing document returned. When using these methods,
* the operation takes a write lock for the duration of the operation in order to ensure the modification is atomic.
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
function test1() {
    client.connect(function (err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        const col = db.collection('findAndModify');
        // Insert multiple documents
        col.insert([{a: 1}, {a: 2}, {a: 2}], function (err, r) {
            assert.equal(null, err);
            assert.equal(3, r.result.n);

            // Modify and return the modified document
            col.findOneAndUpdate({a: 1}, {$set: {b: 1}}, {
                returnOriginal: false
                , sort: [[a, 1]]
                , upsert: true
            }, function (err, r) {
                assert.equal(null, err);
                assert.equal(1, r.value.b);

                // Remove and return a document
                col.findOneAndDelete({a: 2}, function (err, r) {
                    assert.equal(null, err);
                    assert.ok(r.value.b == null);
                    client.close();
                });
            });
        });
    });
}

// findOneAndDelete
function test2() {
// Use connect method to connect to the Server
    client.connect(function (err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        const col = db.collection('findAndModify');
        // Insert multiple documents
        col.insert([{a: 1}, {a: 2}, {a: 2}], function (err, r) {
            assert.equal(null, err);
            assert.equal(3, r.result.n);

            // Remove a document from MongoDB and return it
            col.findOneAndDelete({a: 1}, {
                    sort: [[a, 1]]
                }
                , function (err, r) {
                    assert.equal(null, err);
                    assert.ok(r.value.b == null);
                    client.close();
                });
        });
    });
}

// test1();
test2();