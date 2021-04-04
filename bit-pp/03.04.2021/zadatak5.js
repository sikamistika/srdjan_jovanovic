// Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.


function positionOfOcc (s){
    var position
    for (i=0; i<s.length; i++){
        if (s[i] === 'a'){
        position = i
        break}
        else{
            position = -1
        }
    }
        return position;
    
}

console.log (positionOfOcc ('srdjan'))