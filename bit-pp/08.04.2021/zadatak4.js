// Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2


var a = [4, 2, 2, -1, 6]
var min = Infinity
for (i = 0; i < a.length; i++){
    if (a[i] < min){
        min = a[i]
        index = i;
    }
}
var min2 = Infinity
for (i = 0; i < a.length; i++){
    if (i !== index){
    if (a[i] < min2){
        min2 = a[i]
        }
    }
}
console.log (min2)