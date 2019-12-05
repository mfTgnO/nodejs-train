/*
* Node.js Child Process
* https://www.javatpoint.com/nodejs-child-process
*
* The Node.js child process module provides the ability to spawn child processes in a similar manner to popen(3).
* There are three major way to create child process:
*
*     child_process.exec() method: This method runs a command in a console and buffers the output.
*     child_process.spawn() method: This method launches a new process with a given command.
*     child_process.fork() method: This method is a special case of spawn() method to create child processes.
*
*
* Node.js child_process.exec() method
*
* The child_process.exec() method runs a command in a console and buffers the output.
*
* Syntax:
*   child_process.exec(command[, options], callback)
* Parameters:
*
* 1) command: It specifies the command to run, with space-separated arguments.
*
* 2) options: It may contain one or more of the following options:
*
*     cwd: It specifies the current working directory of the child process.
*     env: It specifies environment key-value pairs.
*     encoding: String (Default: 'utf8')
*     shell: It specifies string Shell to execute the command with (Default: '/bin/sh' on UNIX, 'cmd.exe' on Windows, The shell should understand the -c switch on UNIX or /s /c on Windows. On Windows, command line parsing should be compatible with cmd.exe.)
*     timeout: Number (Default: 0)
*     maxBuffer: Number (Default: 200*1024)
*     killSignal: String (Default: 'SIGTERM')
*     uid Number: Sets the user identity of the process.
*     gid Number: Sets the group identity of the process.
*
* callback: The callback function specifies three arguments error, stdout and stderr which is called with the following output when process terminates.
* */
function test() {
    const exec = require('child_process').exec;
    exec('my.bat', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

test();