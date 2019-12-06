/*
* Specify a Data Type
* http://mongodb.github.io/node-mongodb-native/3.3/tutorials/crud/#specify-a-data-type
*
* The following example specifies a numerical data type when inserting documents with the insertMany method.
*
* Note
* The Decimal128 data type requires MongoDB server version 3.4 or higher.
* */
const Long = require('mongodb').Long;
const Decimal = require('mongodb').Decimal128;

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

    const longValue = Long(1787);
    const decimalValue = Decimal.fromString("27.8892836");

    // Insert multiple documents
    db.collection('numbers').insertMany([{a: longValue}, {b: decimalValue}], function (err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);
        client.close();
    });
});