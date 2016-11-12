var bodyParser = require('body-parser');
var data = [{item: 'hello'},{item: 'world'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/map', function(req, res){
  res.render('map', {data: data});
});

app.post('/map',urlencodedParser, function(req, res){
  console.log(req.body);
  data.push(req.body);
  res.json(data);
});

app.delete('/map/:item', function(req, res){
  data = data.filter(function(todo){
    return todo.item.replace(/ /g, "-") !== req.params.item;
  });
  res.json(data);
});

};
