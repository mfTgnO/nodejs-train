/*
* Node.js Errors
* https://www.javatpoint.com/nodejs-errors
*
* The Node.js applications generally face four types of errors:

    Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
    System errors
    User-specified errors
    Assertion errors

* */

// Node.js Errors Example 1
// Let's take an example to deploy standard JavaScript error - ReferenceError.
function test1() {
    // Throws with a ReferenceError because b is undefined
    try {
        const a = 1;
        const c = a + b;
    } catch (err) {
        console.log(err);
    }
}

// Node.js Errors Example 2
function test2() {
    const fs = require('fs');
    function nodeStyleCallback(err, data) {
        if (err) {
            console.error('There was an error', err);
            return;
        }
        console.log(data);
    }
    fs.readFile('./resources/does-not-exist', nodeStyleCallback);
    fs.readFile('./resources/does-exist', nodeStyleCallback);
}
// test1();
test2();