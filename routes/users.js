var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var urlLinks = require('../models/urlLink');

// Connection URL
var url = 'mongodb://localhost:27017/urlLinks';
mongoose.connect(url);

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get('/' , function( req, res){
	urlLinks.find({}, function( err, links){
		if(err){
			res.send(err);
		} else {	
			res.json(links);
		}
	});
});



router.post('/', function( req, res){
	urlLinks.create({
		name: req.body.name,
		description: req.body.description,
		done : false
	}, function( err , link){
		 if(err){
			res.send(err);
		 } else {
			urlLinks.find( function( err , links){
				if(err){
					res.send(err);
				} else {
					res.json(links);
				}
			});
		}
	});
});


router.delete( '/:link_id' , function( req, res){
	urlLinks.remove( {
		_id: req.params.link_id
	} , function( err, link){
			if(err){
				res.send(err);
			} else {
				urlLinks.find( function( err , links){
				if(err){
					res.send(err);
				} else {
					res.json(links);
				}
			});
		}
	});
});

module.exports = router;
