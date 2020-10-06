function createReviewPost(photoURL, type, title, rating, genre, review) {
	var reviewPostHTML = Handlebars.templates.post ({
		url: photoURL,
		type: type,
		title: title,
		rating: rating,
		genre: genre,
		review: review
	});
	var postSection = document.getElementById('posts');
	postSection.insertAdjacentHTML('beforeend', reviewPostHTML);
}

var allPosts = [];
var allGenres = [];

function getTypeIdFromURL() {
	var path = window.location.pathname;
	var pathParts = path.split('/');
	if (pathParts[1] === "movies") {
		return 'movies';
	} else if (pathParts[1] === "series") {
		return 'series';
	} else {
		return null;
	}
}
/*
function getModalInput(type){
	var photoURL = document.getElementById('photo-url-input').value.trim();
	var title = document.getElementById('title-input').value.trim();
	var rating = document.getElementById('rating-input').value.trim();
	var genre = document.getElementById('genre-input').value.trim();
	var review = document.getElementById('review-input').value.trim();
	
	if (!photoURL || !title || !rating || !genre || !review){
		alert("You must fill all fields!");
		return null;
	} 
	return 
}
*/
function handleModalAcceptClick() {
	var photoURL = document.getElementById('photo-url-input').value.trim();
	var title = document.getElementById('title-input').value.trim();
	var rating = document.getElementById('rating-input').value.trim();
	var genre = document.getElementById('genre-input').value.trim();
	var review = document.getElementById('review-input').value.trim();
	
	if (!photoURL || !title || !rating || !genre || !review){
		alert("You must fill all fields!");
	} else {
		const postRequest = new XMLHttpRequest();
		var requestURL = '/' + getTypeIdFromURL() + '/addPost';
		postRequest.open('POST', requestURL);
		if(getTypeIdFromURL() == "movies") {
			var type = "movie";
		} else {
			var type = "series";
		}
		var requestBody = JSON.stringify({
			url: photoURL,
			type: type,
			title: title,
			rating: rating,
			genre: genre,
			review: review
		});
		postRequest.setRequestHeader('Content-Type', 'application/json:charset=UTF-8');
		postRequest.addEventListener('load', function(event){
		console.log(event.target.status);
		if (event.target.status !== 200){  // event.target refers to the response to our postRequest
				var responseBody = event.target.response;
				alert("Error: Could not save review post to server: " + responseBody);
			} else {
					
				var reviewPostTemplate = Handlebars.templates.post;
				console.log("--reviewPostTemplate: " + reviewPostTemplate);
				
				var newReviewPostHTML = reviewPostTemplate({
					url: photoURL,
					type: type,
					title: title,
					rating: rating,
					genre: genre,
					review: review
				});
				console.log("--newReviewPostHTML: " + newReviewPostHTML);
				var reviewPostContainer = document.querySelector('#posts');
				reviewPostContainer.insertAdjacentHTML('beforeend', newReviewPostHTML);
			}
		});
		console.log("--requestBody: " + requestBody);
		postRequest.send(requestBody);

//		parsePostElem(
		hideModal();
	}
}

function showModal() {
	var addPostModal = document.querySelector('.post-modal-box');
	var modalBackdrop = document.getElementById('modal-backdrop');

	addPostModal.classList.remove('hidden');
	modalBackdrop.classList.remove('hidden');
}

function hideModal() {
	var addPostModal = document.querySelector('.post-modal-box');
	var modalBackdrop = document.getElementById('modal-backdrop');

	addPostModal.classList.add('hidden');
	modalBackdrop.classList.add('hidden');

	clearModalInputs();
}

function clearModalInputs() {
	var modalInputElements = document.querySelectorAll('#add-post-modal input');
	for (let i = 0; i < modalInputElements; i++){
		modalInputElements[i].value = '';
	}
}


function parsePostElem(postElem) {
	var post = {
		title: postElem.getAttribute('data-title'),
		type: postElem.getAttribute('data-type'),
		rating: postElem.getAttribute('data-rating'),
		genre: postElem.getAttribute('data-genre'),
		review: postElem.getAttribute('data-review'),
	};
	var postImageElem = postElem.querySelector('.post-image-container img');
	post.photoURL = postImageElem.src;
	
	return post;
}


window.addEventListener('DOMContentLoaded', function () {

	var postElems = document.getElementsByClassName('post');
	for (var i = 0; i < postElems.length; i++){
		allPosts.push(parsePostElem(postElems[i]));
	}

	const addMovieButton = document.querySelector('#add-movie-button');
	if(addMovieButton){
		addMovieButton.addEventListener('click', showModal);
	}

	const addSeriesButton = document.querySelector('#add-series-button');
	if(addSeriesButton){
		addSeriesButton.addEventListener('click', showModal);
	}

	const modalAcceptButton = document.getElementById('modal-accept');
	modalAcceptButton.addEventListener('click', handleModalAcceptClick);
	
	const modalHideButtons = document.getElementsByClassName('modal-hide-button');
	for (let i = 0; i < modalHideButtons.length; i++){
		modalHideButtons[i].addEventListener('click', hideModal);
	}
});



	

