/*
* Node.js MySQL Insert Records
* https://www.javatpoint.com/nodejs-mysql-insert-record
*
* INSERT INTO statement is used to insert records in MySQL.
* */
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "192.168.2.167",
    port: '3306',
    user: "dev",
    password: "mypassword",
    database: "javapoint"
});

// Insert One Record
function insertOneRecord(con) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO employees (id,name,age,city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        })
    });
}

// Insert Multiple Records
function insertMultipleRecords(con) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO employees (id,name,age,city) VALUES ?";
        var values = [
            ['2', 'Bharat Kumar', '25', 'Mumbai'],
            ['3', 'John Cena', '35', 'Las Vegas'],
            ['4', 'Ryan Cook', '15', 'CA']
        ];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    });
}

// insertOneRecord(con);
insertMultipleRecords(con);