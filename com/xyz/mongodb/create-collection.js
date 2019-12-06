/*
* Node.js MongoDB Create Collection
* https://www.javatpoint.com/nodejs-mongodb-create-collection
*
* MongoDB is a NoSQL database so data is stored in collection instead of table. createCollection method is used to create a collection in MongoDB.
*
* http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/
* */
var MongoClient = require('mongodb').MongoClient;
/*var url = "mongodb://192.168.2.167:27017/db_x";
/!*
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.createCollection("employees", function (err, res) {
        if (err) throw err;
        console.log("Collection is created!");
        db.close();
    });
});*!/*/

/*
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;
    db.createCollection("employees", function (err, res) {
        if (err) throw err;
        console.log("Collection is created!");
        db.close();
    });
});*/

var url = "mongodb://192.168.2.167:27017";
MongoClient.connect(url, function(err, db) {   //here db is the client obj
    if (err) throw err;
    var dbase = db.db("db_x"); //here
    dbase.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();   //close method has also been moved to client obj
    });
});