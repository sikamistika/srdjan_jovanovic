/*Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.*/

    var a = [2, 4, -2, 7, -2, 4, 2];
    result = '';
    for (var i = 0, j = a.length-1; i < a.length; i ++, j--){
        if (a [i] === a[j]){
            result = 'The array is symmetric.'
        }else{
            result = 'The array isn’t symmetric.'
        }
    }
    console.log (result)

    // AKO SE PROMENI BILO KOJI ČLAN OSIM PRVOG I POSLEDNJEG PETLJA NE ISPISUJE TAČAN REZULTAT ???


