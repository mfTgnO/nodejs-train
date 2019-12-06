/*
* Node.js MySQL Delete Records
* https://www.javatpoint.com/nodejs-mysql-delete-record
*
* The DELETE FROM command is used to delete records from the table.
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
    var sql = "DELETE FROM employees WHERE city = 'Delhi'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});