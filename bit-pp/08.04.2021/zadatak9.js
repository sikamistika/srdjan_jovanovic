// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]


function removeItemFromArray(array, n) {
         var newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

    var result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result);








