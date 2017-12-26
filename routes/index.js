var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BitDiem' });
});

router.get('/confirm', function(req, res, next) {
  res.render('confirm', { title: 'Thank You' });
});

module.exports = router;
