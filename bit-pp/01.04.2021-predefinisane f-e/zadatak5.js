// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2


function floatValues(array){
    var count = 0;
    for (i=0; i<array.length; i++) {
        var nova = parseFloat(array[i]);
        if(isFinite(nova) && nova !== parseInt (array[i]))
        count++;
    }
    return count;


}
console.log(floatValues([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]))