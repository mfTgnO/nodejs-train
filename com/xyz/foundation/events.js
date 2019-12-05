/*
* Node.js Events
* https://www.javatpoint.com/nodejs-events
*
* In Node.js applications, Events and Callbacks concepts are used to provide concurrency.
* As Node.js applications are single threaded and every API of Node js are asynchronous.
* So it uses async function to maintain the concurrency. Node uses observer pattern.
* Node thread keeps an event loop and after the completion of any task,
* it fires the corresponding event which signals the event listener function to get executed.
* */
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});
// Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended.");