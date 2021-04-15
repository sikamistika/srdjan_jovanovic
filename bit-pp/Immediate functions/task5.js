// /5. Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28


function octToDec (n){

    return parseInt(n, 8);
}

var n = '034'
console.log(octToDec (n));