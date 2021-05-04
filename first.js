let msg = 'Hello World';
console.log(msg);

const express = require('express');
var path = require('path');

var bodyParser = require("body-parser");
//const cons = require('consolidate');
var app = express();
//app.use(express.static('public'));
app.use(bodyParser.urlencoded());




app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/",function(req,res){
  res.send("hello welcome ");
  
});

app.get("/about",function(req,res){
  res.send("hello about ");
  
});
app.get("/setting",function(req,res){
  res.send("about setting");
  
});
app.post("/action",function (req, res) {
  console.log(req.body);
  console.log('Hello'+req.body.username);
  //console.log(res);
  res.send('hello '+req.body.username);
  //res.json({name:username,age});

});

let port=12345;
app.listen(port,function(){
  console.log("sever start listening the port number "+port);
})