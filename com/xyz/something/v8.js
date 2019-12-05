/*
* Node.js V8
* https://www.javatpoint.com/nodejs-v8
*
* V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser.
* It is written in C++. Now a days, it is used in many projects such as Couchbase, MongoDB and Node.js.
*
* The Node.js V8 module represents interfaces and event specific to the version of V8.
* It provides methods to get information about heap memory through v8.getHeapStatistics() and v8.getHeapSpaceStatistics() methods.
* */
function test1() {
    const v8 = require('v8');
    console.log(v8.getHeapStatistics());
}

test1();

/*
* Node.js v8.getHeapSpaceStatistics() Example
*
* The v8.getHeapSpaceStatistics() returns statistics about heap space.
* It returns an array of 5 objects: new space, old space, code space, map space and large object space.
* Each object contains information about space name, space size, space used size, space available size and physical space size.
* */
function test2() {
    const v8 = require('v8');
    console.log(v8.getHeapSpaceStatistics());
}

test2();

/*
* Memory limit of V8 in Node.js
*
* Currently, by default v8 has a memory limit of 512mb on 32-bit and 1gb on 64-bit systems.
* You can raise the limit by setting --max-old-space-size to a maximum of ~1gb for 32-bit and ~1.7gb for 64-bit systems.
* But it is recommended to split your single process into several workers if you are hitting memory limits.
* */