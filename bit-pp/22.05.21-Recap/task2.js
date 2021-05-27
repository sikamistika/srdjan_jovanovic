/*Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

var removeDuplicateElements = function(arr){
    var newArr = [];
    arr.forEach(function(i){
     if(!newArr[i]){
         newArr[i] = true
     }
    
    });

    return newArr;
    //return newArr;
}
var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var result = removeDuplicateElements(sample);
console.log(result);

// function ukloniDuplikate(nizDuplikata) {
//    var ociscenNiz = nizDuplikata.filter(function (currentValue, index, nizDuplikata) {
//    return nizDuplikata.indexOf(currentValue) === index;   // USLOV
//    });
//    return ociscenNiz;
// }
// var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// var result = ukloniDuplikate(sample);
// console.log(result);
