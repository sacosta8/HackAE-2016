var express = require('express');

var app = express();

app.get('/',function(req, res){
  res.sendFile(__dirname + '/public/index.html')
});

app.get('/contact',function(req, res){
  res.send('this is the contact page')
});

app.get('/profile/:id', function(req,res){
  res.send('You requested ' + req.params.id);
});
app.listen(3000);
