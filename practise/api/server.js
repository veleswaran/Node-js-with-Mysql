const http =  require('http');
const path = require('path');

const movi = require('./movie.json');

const server = http.createServer((req,res)=>{
    if(req.url =="/vel"){
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(movi));
        res.end();
    }
});

const port = 5000;
server.listen(port,()=>{
    console.log("http://localhost:",port);
});