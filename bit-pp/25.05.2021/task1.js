/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/


function multiplyPositive(arr, multiplier) {
  
    for(i=0; i<arr.length; i++){
        
        if(arr[i] >=0){
         arr[i] *= multiplier;
             
        }
          
    }
    return arr;
    }
    
    console.log(multiplyPositive([-3, 8, 5, 3.4, -8], 2));


    

