const express = require('express');
const moment = require('moment');
const crypto = require('crypto-js');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const empSchema = new schema({
    _id:Number,
    emp_Name:String,
    emp_Contact:Number
})

const empModel = mongoose.model("emp_details",empSchema);

const app = express();
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded(true));

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

app.post("/empEntry",(req,res)=>{

    var employeeId = req.body.eno;
    var employeeName = req.body.ename;
    var employeeContact = req.body.econtact;

    var employee = new empModel({
        _id:employeeId,
        emp_Name:employeeName,
        emp_Contact:employeeContact    
    })

    mongoose.connect("mongodb://127.0.0.1:27017/jenkinDb")
    .then(result=>{
        employee.save()
        .then(()=>{
            res.redirect("formSubmitted.html");
        })
        .catch(err=>{
            res.send("Error saving record");
        })
    })
    .catch(err=>{
        console.log("Error in connection");
    })
    console.log(employeeId," ",employeeName," ",employeeContact);
    //res.send(employee);
    
})

app.listen(3000,()=>{
    console.log("Server started");
})