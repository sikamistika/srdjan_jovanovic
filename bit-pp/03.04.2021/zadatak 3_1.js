//Write a function that concatenates a given string n times (default is 1).
//"Ha", 3 -> "HaHaHa"


    function concatenate(string, n) {
        var newString = '';
        for (var i=1; i<=n; i++){
               newString += string;
            
        }
        return newString;
    }
    var result = concatenate ("Ha", 3)
    console.log(result)