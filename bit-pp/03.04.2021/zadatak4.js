//Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2


function numberOfLetter (s){
    var counter = 0
    for (i=0; i<s.length; i++){
        if(s[i] === 'a'){
            counter ++;
        }
        
    }
    return counter

}
    result = numberOfLetter ('srdjanjovanovic', 'a')
    console.log (result)
