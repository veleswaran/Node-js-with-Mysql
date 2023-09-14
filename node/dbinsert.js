var mysql=require ('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Vels344@",
    database: "veleswaran"
});
let vel;

let result=(()=>{
    con.connect(function(err){
    var res=[];
    if(err){throw err;}
    console.log("connected");
    var sql="select * from Details";
    
     con.query(sql,function(err,result){
        if(err){throw err;}
        console.log('one record add successfully');
      return (result);
    });
  
});
});
console.log(result());




