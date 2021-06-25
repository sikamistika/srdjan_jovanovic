var createdMovieList = [];
var createdMovieLength = [];
var $movieTitle = document.querySelector('#title');
var $createMovie = document.querySelector('#createMovie');
var $movieList = document.querySelector('#movieList');
var $errorDisplay = document.querySelector('#errorDisplay');
var $movieLength = document.querySelector('#length');


var onMovieCreate = function () {
    var titleValue = $movieTitle.value;

    if (!titleValue) {
        $errorDisplay.textContent = 'Title is required!'
        return;
    }
    var newMovie = new Movie (titleValue);

    createdMovieList.push(newMovie);
    $movieList.innerHTML +='<li>' + newMovie.getData() + '</li>';
    console.log(createdMovieList);
};

$createMovie.addEventListener('click', onMovieCreate);

var onMovieLength = function () {
    var lengthValue = $movieLength.value;

    if(!lengthValue) {
        $errorDisplay.textContent = 'Length is required';
        return;
    }
    var newLength = new Length (lengthValue);

    createdMovieLength.push(newLength);
    $movieLength.innerHTML += '<li>' + newLength.getData() + '</li>';
    console.log(createdMovieLength);

};

$movieLength.addEventListener('click', onMovieLength);
    


