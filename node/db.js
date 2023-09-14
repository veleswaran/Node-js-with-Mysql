var mysql= require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Vels344@",
    dbname:"rent"
});
con.connect(function(err){
    if(err){
        throw err;
    }
    con.query("SELECT * FROM property", function (err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});