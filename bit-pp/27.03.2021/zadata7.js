
// Write a program that calculates a number of digits of a given number.


function digits_count(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  
  console.log(digits_count(121123));
  
  console.log(digits_count(457));
