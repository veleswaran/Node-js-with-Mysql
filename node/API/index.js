const http = require('http');
const movi = require("./data/movies.json")

const server =http.createServer((req,res)=>{
    if(req.url === "/vel"){
        res.statusCode=200;
        res.setHeader("content-Type","application/json");
        res.write(JSON.stringify(movi));
        res.end();
    }
});

const vel= 5000;

server.listen(vel,()=>{
    console.log(`the server is http://localhost:${vel}`);
});