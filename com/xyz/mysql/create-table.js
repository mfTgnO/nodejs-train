/*
* Node.js MySQL Create Table
* https://www.javatpoint.com/nodejs-mysql-create-table
* */
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "192.168.2.167",
    port: '3306',
    user: "dev",
    password: "mypassword",
    database: "javapoint"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE employee2 (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});