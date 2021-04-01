// Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
// Output: [1, 21, 42, 1000]

var a = ['1', '2', undefined, '42', Infinity, '1.1']
function conv(a){
    var newArray = [];
    for(i=0; i<a.length; i++){
        var currentValue = a[i]
        var isValid = isFinite(currentValue)
        if(isValid){
            var number = parseFloat(currentValue)
            newArray[newArray.length] = number
        
        }
       
    }
    return newArray
} 

console.log(conv(['1', '2', undefined, '42', Infinity, '1.1']))
