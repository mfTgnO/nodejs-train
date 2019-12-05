/*
* Node.js child_process.fork() method
* https://www.javatpoint.com/nodejs-child-process
*
* The child_process.fork method is a special case of the spawn() to create Node processes.
* This method returns object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.
*
* Syntax:

    child_process.fork(modulePath[, args][, options])

Parameters:

1) modulePath: This is a string specifies the module to run in the child.

2) args: It specifies an array List of string arguments.

3) options: It may contain one or more of the following options:

    cwd: It specifies the current working directory of the child process.
    env: It specifies environment key-value pairs.
    execPath: This is a string Executable used to create the child process.
    execArgv: It specifies Array List of string arguments passed to the executable (Default: process.execArgv).
    silent: It specifies Boolean If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit" options for spawn()'s stdio for more details (default is false).
    uid Number: Sets the user identity of the process.
    gid Number: Sets the group identity of the process.
* */
const fs = require('fs');
const child_process = require('child_process');
for (var i = 0; i < 3; i++) {
    var worker_process = child_process.fork("child-process-fork-support.js", [i]);
    worker_process.on('close', function (code) {
        console.log('child process exited with code ' + code);
    });
}