const stream = require('stream');
const fs = require('fs');
const events = require('events');

// console.log(stream);

// const file = fs.createWriteStream("./bigfile.txt");

// file.write(`WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomev
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome
//     `); 


 // Create Read stream 
    // const filer = fs.createReadStream("bigfile.txt");
   
    // //filer.setEncoding('utf-8');
    // var dt='';

    // filer.on('open',()=>{
    //     console.log("File is opened");
    // })

    // filer.on('data',c=>{
    //     dt=dt+c;
    // })

    // filer.on('end',()=>{
    //    console.log(dt);
    // })

    // console.log(dt);
    // console.log(events);


    // Create Write stream

    // const filew = fs.createWriteStream("./file1.txt");

    // var text="Welcome to File in nodeJS";

    // filew.on('open',()=>{
    //     console.log("File opened");
    //     filew.write(text);
    // })


    var event =new  events.EventEmitter();
    // event.setMaxListeners(20);

    // event.on("ev1",()=>{
    //     console.log("Event Handler1");
    // })

    // event.on('ev1',()=>{
    //     console.log("Event Handler2");
    // })
    
    // event.addListener("ev1",()=>{
    //     console.log("Event Handler3");
    // })
    

    // Event Chaining

    event.on("ev1",()=>{
        console.log("E-1");
    }).on("ev1",()=>{
        console.log("E-2")
    }).on("ev1",()=>{
        console.log("E-3");
    })
    

    event.emit("ev1");


    console.log(event.getMaxListeners());
    console.log(event.listenerCount('ev1'));

    // once()

    const event1 = new events.EventEmitter();

    event1.once("ev2",()=>{
        console.log("E1 created");
    })

    event1.once("ev2",()=>{
        console.log("E3 created");
    })

    event1.addListener("ev2",(x,y)=>{
        console.log("E2 created",x,y);  
    })

    
    event1.emit("ev2","Hello","hi");
    console.log(event1.listenerCount('ev2'));
    console.log(event.listeners("ev2"));