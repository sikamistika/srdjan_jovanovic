//Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.

var a = -1
var b = 4
var c = -1
var result = ""

if(a+b+c==0){
    result = "NO sign!!!"
}
else
if(a+b+c>0){
    result = "The sign is even"
}
else
if(a+b+c<0 ){
    result = "The sign is odd"
}


console.log(result)
