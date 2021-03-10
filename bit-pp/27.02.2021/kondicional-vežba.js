//Write a program that compares two numbers and display the larger. Result should be displayed in the console.



var result = ""
var num1 = 25;
var num2 = 36;

if(num1>num2){
    result = "Number " + num1 + " is larger then number  " + num2
}

else

if(num2>num1){
    result = "Number " + num2 + " is larger then number  " + num1
}

else

if(num1=num2){
    result = "Number " + num1 + " is equal with number  " + num2
}



console.log(result)