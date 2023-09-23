const writeto= require("../util/write-to-file");
const requestBodyparser = require('../util/body-parser');
module.exports= async(req,res) => {
    let baseUrl = req.url.substring(0,req.url.lastIndexOf("/")+1);
    let id = req.url.split('/')[3];
    const regexV4 = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i);

    if (!regexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                title: "Validation failed",
                message: "UUID is not valid"
            })
        );
    } 
    else if(regexV4.test(id) && baseUrl==="/app/movie/"){
        try{
            let body = await requestBodyparser(req);
            const index = req.movies.findIndex((movie)=>{
                return movie.id === id;
            });
            if(index === -1){
                res.statusCode = 404;
                res.setHeader("Content-Type", "application/json");
                res.write(JSON.stringify({ title: "Not found", message: "Movie not found" }));
                res.end();
            }
            else{
                req.movies[index]= {id,...body};
                writeto(req.movies);
                res.writeHead(400,{"Content-Type":"application/json"});
                res.end(JSON.stringify(req.movies[index]))
                
            }

        }catch(err){
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