//Write a conditional statement to print three numbers as sorted number list.

var a = 10;
var b = 14;
var c = 8;
 


if(a==b || a==c || b==c){
    result = "NO result"
}


if(a>b && b>c && a>c){
    result = a + ", " + b + ", " + c;
}
else
if(a<b && b<c && a<c){
    result = c + "," + b  + a}
else
if(b>a && b>c && a>c){
    result = b + "," + a +"," +c
}
else
if(b>a && b>c && c>a){
    result = b + "," + c + "," + a
}
else
if(c>a && c>b && a>b){
    result = c + "," + a   + b
}

console.log(result)
