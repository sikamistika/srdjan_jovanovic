// function comp (x, y) {
//     if (x>y){
//     return x;
//      } else
//     return y;
// }
//     result = comp (5, 14)
//    console.log(result)

// function odd (x){
//     if(x%2 !== 0){
//         return x + ' is odd'
//     }else
//     return x + ' is even'
// }
//     result = odd (14)
//     console.log(result)

// function threeDigitsNumber (x){
// if (x>99 && x<=999){
//     return 'Number '+ x + ' is three digit number'
// }else
//     return 'Number ' + x+ ' is not three digit number'
// }
//     result = threeDigitsNumber(8)
//     console.log(result)

// function aritMean(a, b, c, d){
//     var e = (a+b+c+d)/4
//     return e

// }
//     result = aritMean(5, 5, 5, 5)
//     console.log(result)


//ZADATAK IZ NIZOVA

// var a = [1, 2, 3, 4]
// var b = [5, 6, 7, 8]

// var newArrey = []

// for(i=0; i<a.length; i++){
//       newArrey[newArrey.length]=a[i]
//       newArrey[newArrey.length]=b[i]
// }

//     console.log(newArrey)


// var a =[1, 8, 9, 5, 4, 6, 9, 2, 7]

// function zbirNegativnih(a) { 
//     var zbir = 0
//     for(i=0; i<a.length; i++){
//         if (a[i] !== 0){
//             zbir = zbir += a[i]
//          }
     
//     }return zbir
// }   
//     result = zbirNegativnih(a)
//     console.log(result)


// function horChart(x, y, z) {
// var chart = ''
// for(i=0; i<x; i++){
//     var chart = chart += '*'
// }
// chart += '\n'

// for (i=0; i<y; i++){
//     var chart = chart += '*'
// }
//     chart += '\n'

// for (i=0; i<z; i++){
//     var chart = chart += '*'
// }
// chart += '\n'

// return chart


// }
// result = horChart(10, 15, 6)
// console.log(result)


//var a = [2, 4, 7, 8, 7, 7, 1]


//     function app(e){
//     var match = 0
//     for (i=0; i<a.length; i++){
//         if (a[i]===e){
//          match += 1
//     }
//     }
//     return match
// }
// result = app(8)
// console.log(result)



// function numOfLetter(str, letter){
//     var letterCount = 0
//     for (position=0; position<str.length; position++){
//         if (str.charAt(position) == letter) {
//             letterCount += 1
//         }
//     }       return letterCount
// }
// result = (('anamarija', 'a'))
// console.log(result)


//Zadatak 10

// function char_count(str, letter) {
//  var counter = 0;
//  for (index = 0; index < str.length; index++) {
//     if (str.charAt(index) == letter) {
//       counter += 1;
//       }
//   }
//   return counter;
// }

// console.log("Ima ovoliko = " + char_count('Anamarija', "A"));








// function repeatStringNumTimes(string, times) {
//     if(times < 0) 
//       return "";
//     if(times === 1) 
//       return string;
//     else 
//       return string + repeatStringNumTimes(string, times - 1);
//   }
//   result =  repeatStringNumTimes("abc", 8);

//   console.log(result)




