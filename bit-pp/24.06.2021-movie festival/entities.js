function Movie (title) {
    this.title = title;

}
Movie.prototype.getData = function () {
    return this.title;
}

function Length (length) {
    this.length = length;
}
Length.prototype.getData = function () {
    return this.length;
}
