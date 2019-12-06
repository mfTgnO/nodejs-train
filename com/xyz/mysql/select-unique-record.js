/*
* Node.js MySQL SELECT Unique Record
* (WHERE Clause)
* https://www.javatpoint.com/nodejs-mysql-select-unique-record
*
* Retrieve a unique data from the table "employees".
* */
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "192.168.2.167",
    port: '3306',
    user: "dev",
    password: "mypassword",
    database: "javapoint"
});

function selectUniqueRecord(con) {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM employees WHERE id = '2'", function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}

function selectWildcard(con) {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM employees WHERE city LIKE 'L%'", function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}

// selectUniqueRecord(con);
selectWildcard(con);