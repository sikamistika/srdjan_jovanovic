// Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****


function drawquare(n){
    var square = "";
    for(var row = 0; row<n; row++){
        for(var col = 0; col<n; col++){
            if(row===0){
                square +='*';
            } else if(col === 0||col === n-1){
                square += '*';
            }else {
                square += " ";
            }

        }
        square += '\n';
    }

    return square;
}

var draw = drawSquare(S);

console.log(draw)