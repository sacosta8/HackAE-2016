var express = require('express');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

var app = express();
app.use(expressValidator());
var urlencodedParser = bodyParser.urlencoded({ extended: true});

// My DB config
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/locations');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//home page
app.get('/map',function(req, res){
  res.render('map');
});

app.listen(3000);
console.log('listening 3000');
