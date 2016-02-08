var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('./client'));

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/products_api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// var indexRouter = require('/views/index.html');

var indexRouter = require('./server/routes/index');
var productsRouter = require('./server/routes/api/products');

app.use('/', indexRouter);
app.use('/api/products', productsRouter);

var port = 8080;
app.listen(port, function(){
  console.log("je t'écoute..." + port);
});
