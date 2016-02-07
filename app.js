var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(express.static('./public'));
app.use( bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/le-projet-MEAN-01');

// app.use('/api/products', ProductsRouter);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var port = 8080;
app.listen(port, function(){
  console.log("je t'\écoute sur le port " + port);
});
