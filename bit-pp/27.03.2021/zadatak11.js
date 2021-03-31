// Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.


// function con(string,multiplier){
//     var sum = 1
//     var string='abc';
//     var multiplier=4;
//     sum=string += multiplier
//     return sum;
// }
// result=con('abc',4);
// console.log (result)


function repeatStringNumTimes(string, times) {
  if(times <= 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, times - 1);
}
result =  repeatStringNumTimes("abc", 2);

console.log(result)

