const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');


const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Vels344@',
    database: 'vel'
    });
 
con.connect((err)=>{
    if(err) throw err;
})