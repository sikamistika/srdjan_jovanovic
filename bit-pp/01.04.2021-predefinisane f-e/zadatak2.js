// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”

 
function spaja (array){
    var newString = '';
    for (i=0; i<array.length; i++){
        if (array[i] === null){
            continue;

        }
        var elements = isFinite (array[i]);
        if(elements){
            newString = newString + array[i];
        }
        

        }
        return newString;
}

console.log(spaja([NaN, 0, 15, false, -22, '', undefined, 47, null]))