'use strict';

(function(){
    function Genere (name) {
        this.name = name;
        this.getData = function() {
            return this.name.charAt(0).toUpperCase() + this.name.charAt(name.length-1).toUpperCase();
        }
    }
    function Movie (title, length, genere) {
        this.title = title;
        this.genere = genere;
        this.length = length;
        this.getData = function() {
            return this.title + ", " + this.length + ", " + this.genere.getData();
        }

    }
    function Program (date){
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.length;
        this.addMovie = function(movie) {
            this.listOfMovies.push(movie);

            
        }
        this.getFormatedDate = function() {
            return this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear();
        }
        this.getData = function() {
            return "\t" + this.getFormatedDate() + ", program Length:  " + this.getFullLength() + "min" + "\n" + "\t" + this.getFullMovieData();

        }
        this.getFullLength = function(){
            var fullLength = 0;
            for(var i=0; i<this.listOfMovies.length; i++) {
                var currentMovie = this.listOfMovies[i];
                fullLength += parseInt(currentMovie.length);
            }
            return fullLength;
        }
        this.getFullMovieData = function() {
            var fullData = "";
            for(var i=0; i<this.listOfMovies.length; i++) {
                var currentMovie = this.listOfMovies[i];
                fullData += "\t" + currentMovie.getData() + "\n" + "\t";
            }

            return fullData;
        }
    }
    function createMovie(movietitle, movielength, genere) {
        var movie = new Movie (movietitle, movielength, new Genere(genere));
        return movie;
    }
    function createProgram(date){
        var program = new Program (new Date(date));
        return program;
    }
    function Festival(name){
        this.name = name;
        this.listOfPrograms = [];
        this.addProgram = function(program){
            this.listOfPrograms.push(program);
            
        }
        this.getData = function() {
            if(this.listOfPrograms.length === 0) {
                return this.name + "\n" + "\t" + "Program to be announced"
                
            } else {
                return this.name + " ima " + this.getNumberOfAllMovies() + " movie titles" + '\n' + this.getFullProgramData();
        }
    }
        this.getNumberOfAllMovies = function() {
            var numberOfAllMovies = 0;
            for(var i = 0; i < this.listOfPrograms.length; i++){
                var currentProgram = this.listOfPrograms[i];
                numberOfAllMovies += currentProgram.listOfMovies.length;
        }
        return numberOfAllMovies;
    } 
    this.getFullProgramData = function() {
        var fullProgramData = "";
        for(var i = 0; i < this.listOfPrograms.length; i++) {
            var currentProgram = this.listOfPrograms[i];
            fullProgramData += currentProgram.getData() + "\n";
        }
        return fullProgramData;
    }

}

    
    var film1 = createMovie("Shawshank Redemption", "130min", "action");
    var film2 = createMovie("Spider-man: Homecoming", "133min", "action");
    var film3 = createMovie("War of the planets of the apes", "140min", "drama");
    var film4 = createMovie("The Dark Tower", "95min", "western");
    var film5 = createMovie("Deadpool", "108min", "comedy");
    var program1 = createProgram("2021, 6, 13");
    var program2 = createProgram("2021, 6, 14");
    program1.addMovie(film1);
    program1.addMovie(film2);
    program1.addMovie(film3);
    program1.addMovie(film4);
    program2.addMovie(film5);
    var festival = new Festival ("Subotički letnji filmski festival");
    // festival.addProgram(program1);
    //festival.addProgram(program2);
    console.log(festival.getData());
})()

