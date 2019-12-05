/*
* Node.js child_process.spawn() method
* https://www.javatpoint.com/nodejs-child-process
*
* The child_process.spawn() method launches a new process with a given command.
* This method returns streams (stdout & stderr) and it is generally used when the process returns large amount of data.
*
* Syntax:
* child_process.spawn(command[, args][, options])
*
* Parameters:

1) command: It specifies the command to run.

2) args: It specifies an array List of string arguments.

3) options: It may contain one or more of the following options:

    cwd: It specifies the current working directory of the child process.
    env: It specifies environment key-value pairs.
    stdio: Array|String Child's stdio configuration
    customFds: Array Deprecated File descriptors for the child to use for stdio
    detached Boolean : The child will be a process group leader
    uid Number: Sets the user identity of the process.
    gid Number: Sets the group identity of the process.
* */
console.log("Child Process " + process.argv[2] + " executed." );