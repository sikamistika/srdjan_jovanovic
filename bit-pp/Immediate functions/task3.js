    // 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	// Input: prograMming
	// Output: progra**ing, 2

var input = 'prograMming';

(function(input){
    var result = '';
    var count = 0;

    for (var i = 0; i < input.length; i++){
        var currentChar = input[i];
        if (currentChar === 'M' || currentChar === 'm'){

        result = result + '*';
        count++;
        } else{
            result = result + currentChar;
        }


        
    }


    console.log(result, count);

})(input);

