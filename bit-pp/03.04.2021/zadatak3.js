// Write a function that concatenates a given string n times (default is 1).
	// "Ha" -> "Ha"
    // "Ha", 3 -> "HaHaHa"

    'use strict'
function repeatStringNumTimes(string, times) {
    if(times < 0){ 
      return " "}
    if(times === 1){ 
      return string}
    else{ 
      return string + repeatStringNumTimes(string, times - 1)}
  }
  
//   result = repeatStringNumTimes("Ha", 1)

  console.log( repeatStringNumTimes("Ha", 2))
  
