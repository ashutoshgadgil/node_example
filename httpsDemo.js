const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('abc-key.pem'),
    cert: fs.readFileSync('abc-cert.pem')
  };

const server = https.createServer(options,(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    // res.write("<h2 style=color:blue>Web App</h2>");
    // res.write("<h3>Welcome to Https</h3>");

    console.log(req.url.split('?')[0]);
    if(req.url.split('?')[0]=='/emp')
    {
        res.end("Emp");
    }
    res.end();
})

server.listen(3000,()=>{
    console.log("Server started");
})
