var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('map');
});

app.listen(3000);
console.log('listening 3000');
