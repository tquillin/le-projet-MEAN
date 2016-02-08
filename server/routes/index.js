var express = require('express');
var router = express.Router();

router.get('/', function(){
  res.json( 'index', {title: "Here are products"}); 

});

module.exports = router;
