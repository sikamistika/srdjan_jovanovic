// Write a program that calculates the sum of odd elements of a given array.


var a = [2, 4, 7, 8, 7, 7, 1];

function oddSum(a){
    var sum=0;
    for(i=1;i<a.length;i++){
        if (a[i] % 2 !== 0){
         sum=sum+=a[i]
        }
    } return sum;
}

var result=oddSum(a);
console.log(result);
