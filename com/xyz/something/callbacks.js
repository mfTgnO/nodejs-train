/*
* Node.js Callbacks
* https://www.javatpoint.com/nodejs-callbacks
*
* Callback is an asynchronous equivalent for a function.
* It is called at the completion of each task. In Node.js, callbacks are generally used. All APIs of Node are written in a way to supports callbacks.
* For example: when a function start reading file, it returns the control to execution environment immediately so that the next instruction can be executed.
*
* In Node.js, once file I/O is complete, it will call the callback function.
* So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process high number of request without waiting for any function to return result.
* */

// Blocking Code Example
function test1() {
    var fs = require("fs");
    var data = fs.readFileSync('input.txt');
    console.log(data.toString());
    console.log("Program Ended");
}

// test1();

// Non Blocking Code Example
function test2() {
    var fs = require("fs");

    fs.readFile('input.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });
    console.log("Program Ended");
}

test2();