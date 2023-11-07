let mysql = require('mysql');
const express= require('express');
const bodyParse = require('body-parser');

let app= express();
// create the database connection
let con = mysql.createConnection({
  host:"localhost",
  user: 'root',
  password:'Vels344@',
  database:'ajax'
});

con.connect((err)=>{
  if(err) throw err;

  console.log("database is connected success");
});

app.use(bodyParse.urlencoded({extended:false}));
// create the express api

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
});

// insert the data from form to database

app.post('/insert',(req,res)=>{
  const {name,phone,id} = req.body;
  const sql = 'insert into Employee values(?,?,?)';
  con.query(sql,[id,name,phone],(err,result)=>{
    if(err) throw err;
    console.log("the data is inserted successfully");
    res.redirect('/');
  })
});

app.get('/get',(req,res)=>{
  const sql = 'select * from Employee';
  con.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.render('select', {data:result});
  })
})

let port =5000;

app.listen(port ,()=>{
  console.log(`the server is started ${port}`);
})