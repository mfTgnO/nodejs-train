/*
* Node.js Streams
* https://www.javatpoint.com/nodejs-streams
*
* Streams are the objects that facilitate you to read data from a source and write data to a destination. There are four types of streams in Node.js:

    Readable: This stream is used for read operations.
    Writable: This stream is used for write operations.
    Duplex: This stream can be used for both read and write operations.
    Transform: It is type of duplex stream where the output is computed according to input.

Each type of stream is an Event emitter instance and throws several events at different times. Following are some commonly used events:

    Data:This event is fired when there is data available to read.
    End:This event is fired when there is no more data available to read.
    Error: This event is fired when there is any error receiving or writing data.
    Finish:This event is fired when all data has been flushed to underlying system.
* */
function test1() {
    var fs = require("fs");
    var data = '';
// Create a readable stream
    var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8.
    readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
    readerStream.on('data', function (chunk) {
        data += chunk;
    });
    readerStream.on('end', function () {
        console.log(data);
    });
    readerStream.on('error', function (err) {
        console.log(err.stack);
    });
    console.log("Program Ended");
}

// test1();

/*
* Node.js Writing to stream
*
* Create a JavaScript file named main.js having the following code:
* */
function test2() {
    var fs = require("fs");
    var data = 'A Solution of all Technology';
// Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8
    writerStream.write(data, 'UTF8');
// Mark the end of file
    writerStream.end();
// Handle stream events --> finish, and error
    writerStream.on('finish', function () {
        console.log("Write completed.");
    });
    writerStream.on('error', function (err) {
        console.log(err.stack);
    });
    console.log("Program Ended");
}

// test2();

/*
* Node.js Piping Streams
*
* Piping is a mechanism where output of one stream is used as input to another stream. There is no limit on piping operation.
* Let's take a piping example for reading from one file and writing it to another file.
* */
function test3() {
    var fs = require("fs");
// Create a readable stream
    var readerStream = fs.createReadStream('input.txt');
// Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');
// Pipe the read and write operations
// read input.txt and write data to output.txt
    readerStream.pipe(writerStream);
    console.log("Program Ended");
}

// test3();
/*
* Node.js Chaining Streams
*
* Chaining stream is a mechanism of creating a chain of multiple stream operations by connecting output of one stream to another stream.
* It is generally used with piping operation.
* Let's take an example of piping and chaining to compress a file and then decompress the same file.
* */
function test4() {
    var fs = require("fs");
    var zlib = require('zlib');
// Compress the file input.txt to input.txt.gz
    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));
    console.log("File Compressed.");
}

// test4();

/*
* Now you will see that file "input.txt" is compressed and a new file is created named "input.txt.gz" in the current file.
*
* To Decompress the same file: put the following code in the js file "main.js"
* */
function test5() {
    var fs = require("fs");
    var zlib = require('zlib');
// Decompress the file input.txt.gz to input.txt
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));
    console.log("File Decompressed.");
}

test5();