function Movie (title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;

}
Movie.prototype.getData = function () {
    return this.title + ' ,' + this.length + ' ,' + this.genre;
}

// function Length (length) {
//     this.length = length;
// }
// Length.prototype.getData = function () {
//     return this.length;
// }
