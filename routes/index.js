var express = require('express');
var router = express.Router();

var twits = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Twit\'Heure', twits: twits });
});

router.post('/', function(req, res, next) {
    twits.unshift(req.body.twit);
    res.redirect('/')
});

module.exports = router;
