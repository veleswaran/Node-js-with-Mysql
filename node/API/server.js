const http = require('http');

const getReq = require("./methods/get-request");
const postReq = require('./methods/post-request');
const putReq = require('./methods/put-request');
const deleteReq = require('./methods/delete-request');

const movies = require('./data/movies.json');

//require('dotenv').config();
const PORT = process.env.PORT || 5002;

const server = http.createServer((req,res)=>{
   req.movies = movies; 
switch(req.method){
    case "GET":
        getReq(req,res);
        break;
    case "POST":
        postReq(req,res);
        break;
    case "PUT":
        putReq(req,res);
        break;
    case "DELETE":
        deleteReq(req,res);
        break;
    default:
        res.statusCode=200;
        res.setHeader("constet-type","application/json");
        res.write(JSON.stringify({message:"root not found"}));
        res.end();


}

   

});

server.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
});