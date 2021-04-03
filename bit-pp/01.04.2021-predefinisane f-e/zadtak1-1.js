// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]


function con(array){
    var newArray = [];
    for (i=0; i<array.length; i++){
        var test = array[i];
        var isValid = isFinite (test);
        if (isValid){
            var nova = parseFloat(test);
            newArray[newArray.length] = nova;
        }
    }

    return newArray

}

console.log (con(["1", "21", undefined, "42", "1e+3", Infinity]))