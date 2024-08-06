const events = require('events');

const event1 = new events.EventEmitter();  // Create event object

event1.on("ev1",()=>{                      // create listener for event ev1
    console.log("Event Handler1 called");
})

event1.on("ev1",()=>{                      // create listener for event ev1
    console.log("Event Handler2 called");
})

event1.emit("ev1");
console.log("Total attached Listeners to event ev1 : ",event1.listenerCount("ev1")); 

///////////////////////////////////////////////////////////////////////////////////
// Respond to an event only once

const event2 = new events.EventEmitter();

event2.once("ev2",()=>{
    console.log("Event Handler for ev2");
})

event2.emit("ev2");
event2.emit("ev2");

///////////////////////////////////////////////////////////////////////////////////

// Chaining of events

const event3 = new events.EventEmitter();

event3.on("ev1",()=>{
    console.log("Handler1");
}).on("ev1",()=>{
    console.log("Handler2");
}).on("ev1",()=>{
    console.log("Handler3");
})

event3.emit("ev1");
