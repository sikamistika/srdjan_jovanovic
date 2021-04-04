// Write a function to find the position of the last occurrence of a character in a string.
//  The result should be in human numeration form. 
//  If there are no occurrences of the character, function should return -1.


function lastPositionOcc (s){
    var position;
    for (i = s.length; i<=0; i--){
        if (s[i] === 'a'){
            position = i;
        }else{
            position = -1
        }
    }
        return position;
}

    // result = lastPositionOcc ('srdjan')
    console.log (lastPositionOcc ('srdjana'))
