const http = require ('http');

const PORT = process.env.PORT||5000;

const server = http.createServer((req,res)=>{
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "GET":
            getReq(req,res);
            break;
        case "GET":
            getReq(req,res);
            break;
        case "GET":
            getReq(req,res);
            break;
        default:
            res.statusCode=400;
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify({title:"not found",message:"Route not found"}));
            res.end();

    }
   
});

server.listen(PORT,()=>{
    console.log(`server is started in http://localhost:${PORT}`);
})