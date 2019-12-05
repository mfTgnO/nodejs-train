/*
* Node.js MySQL Create Database
* https://www.javatpoint.com/nodejs-mysql-create-database
* */
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypassword'
});
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    con.query("CREATE DATABASE javapoint", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});