/*
* Node.js TTY
* https://www.javatpoint.com/nodejs-tty
*
* The Node.js TTY module contains tty.ReadStream and tty.WriteStream classes. In most cases, there is no need to use this module directly.
* You have to use require ('tty') to access this module.
* */
var tty = require('tty');
process.stdin.setRawMode(true);
process.stdin.resume();
console.log('I am leaving now');
process.stdin.on('keypress', function (char, key) {
    if (key && key.ctrl && key.name == 'c') {

        process.exit()
    }
});