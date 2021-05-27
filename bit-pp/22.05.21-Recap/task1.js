/* Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
 Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

var duplicateAllElements = function (arr){
    var newArr = [];

    arr.forEach(function(element){
    
        newArr.push(element, element);

    });
    


    return newArr;
}

var sample = [2, 4, 7, 11, -2, 1];
var result = duplicateAllElements(sample);
console.log(result);