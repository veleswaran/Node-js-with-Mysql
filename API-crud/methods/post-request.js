const crypto = require('crypto');
const writeto= require("../util/write-to-file");
const requestBodyparser = require('../util/body-parser');
module.exports= async(req,res) => {
    if(req.url === "/app/movie"){
        try{
            let body = await requestBodyparser(req);
            body.id=crypto.randomUUID();
            req.movies.push(body);
            writeto(req.movies);
            res.writeHead(201,{"Content-Type":"application/json"});
            res.end();
            console.log("Request Body: ",body);
        }
        catch(err){
            console.log(err);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                title: "Validation failed",
                message: "Request body is not valid"
            })
        );
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ title: "Not found", message: "Movie not found" }));
    }
}