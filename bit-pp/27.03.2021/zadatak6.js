// Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:

function horizontalChart(x, y, z) {
    var chart = '';
    for (var i=0; i<x; i++){
        chart += '*'
    }