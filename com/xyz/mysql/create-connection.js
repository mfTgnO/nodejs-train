/*
* Node.Js Create Connection with MySQL
* https://www.javatpoint.com/nodejs-mysql-create-connection
*
* Install MySQL Driver
*
* You have to install MySQL driver to access a MySQL database with Node.js. Download MySQl module from npm.
* To download and install the "mysql" module, open the Command Terminal and execute the following:
*
* > npm install mysql
* */
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '39.104.19.41',
    user: 'root',
    password: '!@#123QWEqwe'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});