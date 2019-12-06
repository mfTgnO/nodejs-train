/*
* Node.js MySQL Select Records
* https://www.javatpoint.com/nodejs-mysql-select-record
*
* Retrieve all data from the table "employees".
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
    con.query("SELECT * FROM employees", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});