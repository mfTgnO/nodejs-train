/*
* Node.js MySQL Drop Table
* https://www.javatpoint.com/nodejs-mysql-drop-table
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
    var sql = "DROP TABLE employee2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});