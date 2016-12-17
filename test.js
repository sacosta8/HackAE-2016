var express = require('express');
var bodyParser = require('body-parser');
//var addLocationController = require('./controllers/addLocationController')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//addLocationController(app);
app.get('/map',function(req, res){
  res.render('map');
});
/*
app.get('/map',function(req, res){
  res.render('map');
});

app.post('/map', urlencodedParser, function(req, res){
  console.log(req.body);;
  res.render('map');
});

app.get('/contact',function(req, res){
  res.send('this is the contact page')
});

app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'janitor'};
  res.render('profile',{person: req.params.name, data: data});
});
*/
app.listen(3000);
console.log('listening 3000');
