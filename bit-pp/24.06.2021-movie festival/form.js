var createdMovieList = [];
var $movieTitle = document.querySelector('#title');
var $createMovie = document.querySelector('#createMovie');
var $movieList = document.querySelector('#movieList');
var $errorDisplay = document.querySelector('#errorDisplay');
var $movieLength = document.querySelector('#length');
var $genreMovie = document.querySelector('#genre');


var onMovieCreate = function () {
    var titleValue = $movieTitle.value;
    var movieLength = $movieLength.value;
    var genreMovie = $genreMovie;

    if (!titleValue || !movieLength) {
        $errorDisplay.textContent = 'Both are required!'
        return;
    }
    var newMovie = new Movie (titleValue, movieLength, genreMovie);

    createdMovieList.push(newMovie);
    $movieList.innerHTML +='<li>' + newMovie.getData() + '</li>';
    console.log(createdMovieList);
};

$createMovie.addEventListener('click', onMovieCreate);




