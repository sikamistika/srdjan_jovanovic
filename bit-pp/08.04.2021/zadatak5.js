/*Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/


var array = [3, 11, -5, -3, 2]
function zbir (a){

var sum = 0;

for (i = 0; i < a.length; i++){
    if (a[i] > 0){
        sum += a[i]
    }
     
    }
    return sum
} 
console.log (zbir(array));

// ZAŠTO FUNKCIJA NE RADI???