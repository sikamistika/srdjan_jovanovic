// function sum (a,b){
// var c = a+b
// return c
// }
// var result = sum(5,6)
// console.log(sum(5,6))


function  flexibleSum(){
    var sum = 0
    for (var i=0; i<arguments.length; i++)
    sum+= arguments[i]
   
}
    return sum;
var result = sum(5,6);
var  flexResult = flexibleSum (1,2,3, 4 ,5)
 console.log(flexResult)