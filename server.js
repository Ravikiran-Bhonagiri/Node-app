var express = require('express');
var app = express();
//var mongoose = require('mongoose');
var assert = require('assert');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var methodoverride = require('method-override');
var hoganexpress = require('hogan-express');
var path = require('path');

// var urlLinks = require('./models/urlLink');
var port = 3000;
var ip = 'localhost';

var routes = require('./routes/index');
var users = require('./routes/users');

app.use(express.static(path.join( __dirname , '/public')));
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({'extended':'true'}));
app.use(bodyparser.json());
app.use(bodyparser.json({ type: 'application/vnd.api+json'}));
app.use(methodoverride());

app.set('views', __dirname + '/views');
//app.use(express.static(path.join( __dirname , '/views')));
app.set('view engine' , 'html');
app.enable('view cache');
app.engine('html', hoganexpress);


/*
// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
*/

/*

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new user
    var link = urlLinks({
        name: 'http://youtube.com&33454456',
        description: 'Horror movie'
    });

    // save the user
    link.save(function (err) {
        if (err) throw err;
        console.log('link created!');

        // get all the users
        urlLinks.find({}, function (err, links) {
            if (err) throw err;

            // object of all the users
            console.log(links);
        });
    });
});

*/

/*
app.get('/links' , function( req, res){
	urlLinks.find({}, function( err, links){
		if(err){
			res.send(err);
		}	
		res.json(links);
	});
});



app.post('/links', function( req, res){
	urlLinks.create({
		name: req.body.name,
		desccription: req.body.description,
		done : false
	}, function( err , link){
		 if(err)
			res.send(err);
		
		 urlLinks.find( function( err , links){
			if(err)
				res.send(err);
			
			res.json(links);
		 });
	});
});


app.delete( 'links/:link_id' , function( req, res){
	urlLinks.remove( {
		_id: req.params.link_id
	} , function( err, link){
			if(err)
				res.send(err);
			
			urlLinks.find( function( err , links){
			if(err)
				res.send(err);
			
			res.json(links);
		 });
		
	});
});
*/

/*

app.get( '*', function( req, res){
	res.sendfile('./public/sample.html');
});

*/

app.listen(port, ip, function(){
	console.log( 'listening to ' + ip + " " + port);
});

app.use('/', routes);
app.use('/links/', users);
//app.use('/', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
