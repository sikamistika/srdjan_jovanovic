// Write a program that calculates a number of integer values in the array.
// Input:[ NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3



function integerValues (array){
var count = 0;
for (i = 0; i < array.length; i++){
    var next = parseFloat(array[i]);
    if(isFinite (next) && next===parseInt(array[i])){
        count++
    }
}

    return count;
}

console.log(integerValues([ NaN, 23.1, 15, false, -22.5, '', 4, 7, null]))