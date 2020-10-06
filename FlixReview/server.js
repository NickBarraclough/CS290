
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3123;
var postData = require('./postData.json');
var post;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('', function(req, res){
	res.render('homePage');
});

app.get('/:type', function(req, res, next){
	var type = req.params.type;
	if(type == 'movies'){
		var moviePosts = postData.filter((movie) => {
			if(movie.type == 'movie'){
				return true;
			} else {
				return false;
			}
		});
		post = moviePosts;
		res.status(200).render('moviesPage', {'movie':post});
	} else if(type == 'series'){
		var seriesPosts = postData.filter((series) => {
			if(series.type == 'series'){
				return true;
			} else {
				return false;
			}
		});
		post = seriesPosts;
		res.status(200).render('seriesPage', {'series':post});
	} else {
		next();
	}
});


//Save posts on the server so that they remain on the page
app.post('/:type/addPost', function (req, res, next) {
	var type = req.params.type;
	console.log(req.params.type);
	if (req.params.type == 'movies' || req.params.type == 'series'){
//		if(req.body && req.body.title && req.body.url && req.body.rating && req.body.genre && req.body.review){
			//to add it just to server memory (server will forget if it's restarted)
			postData.push({
				photoURL: req.body.url,
				title: req.body.title,
				type: type,
				rating: req.body.rating,
				genre: req.body.genre,
				review: req.body.review
			});
			fs.writeFile(__dirname + '/postData.json', 
				JSON.stringify(postData, 2, 1),
				function (err) {
					if (!err) {
						res.status(200).send();
					} else {
						res.status(500).send("Failed to write data to server side");
					}
				}
			);
	//	} else {
	//		res.status(400).send("Request body needs a url, title, rating, genre, and review");
	//	}
	} else {
		next();
	}
});


app.get('*', function(req, res, next) {
	res.status(404).render('404');
});

app.listen(port, function(err) {
	if (err) {
		throw err;
	}
	console.log("== Server is listening on port", port);
});

