// Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]



var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];

for (i=0; i<a.length; i++){
    if (i===p){
        a[i]=e; 
        result = a;
    }
    else if (p>a.length){
        result = 'error';
    }
}
    console.log (result)
