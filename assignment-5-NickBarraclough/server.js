/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Nicolas Barraclough	
 * Email: barracln@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;
var postData = require('./postData.json');
var post;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('', function(req, res){
	post = postData;
	res.render('photoCards', {post});

});

app.get('/:postNumber', function(req, res, next){

	var postNumber = req.params.postNumber;
	
	if(postNumber > 0 && postNumber <= 8){
		post = [postData[postNumber - 1]];
		res.status(200).render('photoCards', {post});
	} else {
		next();
	}
});

app.get('*', function (req, res) {
	res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
