var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      // console.log( data );
      res.end( data );
   });
})
app.get('/', function (req, res) {
   console.log("Hi API");
   res.end("hi Api");
})
let port=3302;
var server = app.listen(port, function () {

   console.log(`Server is running on http://localhost:${port}`);

})