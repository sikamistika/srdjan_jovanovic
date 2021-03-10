//Write a conditional statement to find the largest of five numbers. Display the result in the console.
// drugi način je da se umesto <> koriste logički operator &&

var a = 0
var b = 4
var c = 8
var d = 10
var e = 12

if(a>b>c>d>e){
    console.log (a)
}
else
if(a<b>c>d>e){
    console.log(b)
}
else
if(a<b<c>d>e){
    console.log(c)
}
else
if(a<b<c<d>e){
    console.log(d)
}
else
if(a<b<c<d<e){
    console.log(e)
}