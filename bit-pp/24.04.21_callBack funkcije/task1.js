


function invokedAdd (f1, f2){
    return f1() + f2()
}

function one(){
    return 1;
}

function one (){
    return 1
}
function two(){
    return 2
}


console.log(invokedAdd (one, two));
console.log(invokedAdd(function(){
    return 2;
},
function(){
    return 3;
}))

console.log(one)