const express = require('express');
const moment = require('moment');


const app = express();
app.use(express.static('public'));

app.get("/home",(req,res)=>{
    res.set(200);
    res.setHeader('Content-Type','text/html');

    res.write(JSON.stringify(moment.weekdays()));

    res.write("<select>");
    for(let i of moment.weekdays())
    {
        res.write(`<option>${i}</option>`);
    }
    res.write("</select>");
    res.write("***********");
    res.write("***********");
    res.end();
})

app.get("/empEntry",(req,res)=>{

    res.redirect("formSubmitted.html");
})

app.listen(3000,()=>{
    console.log("Server started");
})