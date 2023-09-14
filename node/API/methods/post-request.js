const crypto = require( 'crypto');
const requsetBodyparser = require('../util/body-parser');
module.exports =async (req,res)=>{
    if(req.url === "/api/movies"){
        try{
            let body = await requsetBodyparser(req)
;            body.id=crypto.randomUUID();
            req.movies.push(body);
            res.writeHead(201,{"Content-Type":"application/json"});
            res.end();

        }catch(err){
            console.log(err);
        }
    } 
};