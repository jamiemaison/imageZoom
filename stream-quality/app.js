var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var colors = require('colors');

//Use ejs as the templating engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req,res){
  //Stuff goes here
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
