/*
* Node.js MySQL Create Database
* https://www.javatpoint.com/nodejs-mysql-create-database
* */
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '192.168.2.167',
    port:'3306',
    user: 'dev',
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