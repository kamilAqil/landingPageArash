var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    console.log('hit subscribe route')
    res.render('index', { title: 'BitDiem' });
});

module.exports = router;
