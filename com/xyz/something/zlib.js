/*
* Node.js ZLIB
* https://www.javatpoint.com/nodejs-zlib
*
* The Node.js Zlib module is used to provide compression and decompression (zip and unzip) functionalities.
* It is implemented using Gzip and deflate/inflate.
* */

// Let's see a simple example of Node.js ZLIB module to compress a file "input.txt" into "input.txt.gz".
function test1() {
    const zlib = require('zlib');
    const gzip = zlib.createGzip();
    const fs = require('fs');
    const inp = fs.createReadStream('input.txt');
    const out = fs.createWriteStream('input.txt.gz');
    inp.pipe(gzip).pipe(out);
}

// test1();

// Let's see a simple example of Node.js ZLIB module to decompress a file "input.txt.gz" into "input2.txt".
function test2() {
    const zlib = require('zlib');
    const unzip = zlib.createUnzip();
    const fs = require('fs');
    const inp = fs.createReadStream('input.txt.gz');
    const out = fs.createWriteStream('input2.txt');

    inp.pipe(unzip).pipe(out);
}

test2();

// To understand this example well, create "input.txt" file having a large amount of data. Let's assume it has 40 kb data.
// After compressing this file you will get the size of compressed file "input.txt.gz" to 1 kb only.
// After decompressing the "input.txt.gz" file, you will get 40 kb of same data into "input2.txt" file.