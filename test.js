var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var util = require('util');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.render('map');
});

const port = 3000;
app.listen(port, function () {
    console.log('Running on localhost:' + port);
});
