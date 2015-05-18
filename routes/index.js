var express = require('express');
var router = express.Router();

var twits = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Twit\'Heure', twits: twits});
});

router.post('/', function(req, res, next) {
	var twit = req.body.twit;
	var name = req.body.name;
	if (name!=""&&twit!=""&&name!=undefined){
		var now = new Date;	
		var day = now.getDate();
		var month = now.getMonth()+1;
		var year = now.getFullYear();
		var date = day+'/'+month+'/'+year;
		var hours = now.getHours();
		var min = now.getMinutes();
		var hour = hours+'h'+min;
		twits.unshift({twit:twit,name:name,date:date,hour:hour});
	}
	if (twits.length==11)
		twits.pop();
    res.redirect('/');
});

module.exports = router;
