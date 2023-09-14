module.exports = (req, res) => {
    let baseUrl = req.url.substring(0,req.url.lastIndexOf("/")+1);
    let id =req.url.split("/")[3];
    const regxV1 = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
 
    if (req.url === "/api/movies"|| req.url=== "/vel") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    } 
    else if(!regxV1.test(id)){
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ title:"validation failed",message: "uuid is not valid" }));   
        res.end();
    }
    else if(baseUrl==="/api/movies/"&&regxV1.test(id)){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        let filter= req.movies.filter((movie)=>{
            return movie.id ===id;
        });
        if(filter.length>0){
            res.statusCode=200;
            res.write(JSON.stringify(filter));
            res.end();
        }
        else{
            res.statusCode=400;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title:"validation failed",message: "uuid is not valid" }));   
            res.end();
        }
     
    }
    
        else {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ message: "root not found" }));
        res.end();
    }
};


