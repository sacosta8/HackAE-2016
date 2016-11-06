var express = require('express')
var bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

var app = express()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

db.serialize(function() {
  db.run("CREATE TABLE InfoAndDescription (name TEXT, latitude TEXT, longitude TEXT)")
});

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.fname)
  console.log(req.body.fname);
  db.serialize(function() {
    db.run("INSERT into users VALUES (\""+req.body.fname+"\",\""+req.body.lname+"\")");

    db.each("SELECT * FROM users", function(err, row) {
        console.log("users: " + row.fname + " " + row.lname);
    });
  });
})

app.post('/newpoint', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.fname)
  console.log(req.body.fname);
  db.serialize(function() {
    db.run("INSERT into InfoAndDescription VALUES (\""+req.body.name+"\",\""+req.body.latitude+"\",\""+req.body.longitude+"\")");

  });
})

app.get('/locations', function(req, res) {
   db.all("SELECT * FROM InfoAndDescription", function(err, row) {
        res.send(JSON.stringify(row));
    });
});

app.get('/user/:fname', function(req, res) {
   db.each("SELECT * FROM users where fname=\"" + req.params.fname+"\" LIMIT 1", function(err, row) {
        res.send("users: " + row.fname + " " + row.lname+"\n");
    });
});


app.use(express.static('public'));



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
