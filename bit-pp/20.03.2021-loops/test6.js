// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var a=[2, 4, -2, 7, -2, 4, 2], result='';

for (var i=0, j=a.length-1; i<a.length; i++, j--){
    {
        if (a[i]===a[j]){
            result = 'The array is symmetric.';
        }
        else {
            result='The array isn’t symmetric.';
        }
    }
}
console.log (result)







