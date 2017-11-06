var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  // setTimeout(function(){
    res.render('index', { title: '我的note' });
  // },5000)
});

module.exports = router;
