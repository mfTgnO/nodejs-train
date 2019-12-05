/*
* Node.js Query String
* https://www.javatpoint.com/nodejs-query-string
*
* The Node.js Query String provides methods to deal with query string. It can be used to convert query string into JSON object and vice-versa.
* To use query string module, you need to use require('querystring').
*
* Node.js Query String Methods

The Node.js Query String utility has four methods. The two important methods are given below.
Method 	Description
querystring.parse(str[, sep][, eq][, options]) 	converts query string into JSON object.
querystring.stringify(obj[, sep][, eq][, options]) 	converts JSON object into query string.
* */
function test1() {
    let querystring = require('querystring');
    const obj1 = querystring.parse('name=sonoo&company=javatpoint');
    console.log(obj1);
}

// test1();

function test2() {
    let querystring = require('querystring');
    const qs1 = querystring.stringify({name: 'sonoo', company: 'javatpoint'});
    console.log(qs1);
}

test2();