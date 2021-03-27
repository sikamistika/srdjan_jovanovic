
// var i = [1, 2, 3, 4]
// console.log(i[0]);

// var a = [1, 10, 100, 1000],
//     s = 0,
//     p = 1,
//     i;

//     for(i=0; i<a.length; i++){

//     s += a[i]
//     p *= a[i]


// }
//     console.log(s, p)

// var array = ['A', undefined, NaN, 3];

// for(i=0; i<array.length; i++){

//     console.log (array[i]);

// }

// Write a program that prints the elements of the following array.
// var a = [

// [1, 2, 1, 24],
// [8, 11, 9, 4],
// [7, 0, 7, 27]
// ];

// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
//     ];

//     for (i=0; i<a.length; i++){
//         console.log(a[i])
//     }

// Write a program that outputs the sum of squares of the first 20 numbers.

// var sum = 0;
// for(i=1; i<=20;i++){
//     sum += (i*i);

// }
// console.log(sum)


// Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).


for(i=1; i<=100; i++){
   
if (i%3===0){
    console.log('Fizz')
}
if(i%5===0){
    console.log('Buzz')
}
else{
    console.log(i)

}

}