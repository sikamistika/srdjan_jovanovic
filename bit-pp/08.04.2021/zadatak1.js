// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

var a = [5, -4.2, 3, 7];
function checksNumber (e){
    for (i = 0; i < a.length; i++){
        if (a[i] === e){
            return 'yes';
        } 
    }
    return 'no';
 }

var result = checksNumber (7);
console.log (result);

