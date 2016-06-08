var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//var urlLinks = require('../models/urlLink');

// Connection URL
//var url = 'mongodb://localhost:27017/urlLinks';
//mongoose.connect(url);

router.get('/', function(req, res, next) {
  res.locals = { 
			title: [] 
			   } ;
  return res.render ( 
  'index', 
	{ 
		partials:
		{
			part: 'part',
		}	
	}	 
  );
});


/*
router.get( '/public' , function( req, res, next){
	return res.sendFile('../public/code.js');
});
*/

module.exports = router;
