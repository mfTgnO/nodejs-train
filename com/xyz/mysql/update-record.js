/*
* Node.js MySQL Update Records
* https://www.javatpoint.com/nodejs-mysql-update-record
*
* The UPDATE command is used to update records in the table.
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
    var sql = "UPDATE employees SET city = 'Delhi' WHERE city = 'Allahabad'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});