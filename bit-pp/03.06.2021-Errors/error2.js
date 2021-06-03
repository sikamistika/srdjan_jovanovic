function sum(a,b) {
    return a + b
}


var devide = function(a,b) {
    if(b===0) {
        throw new Error ('Division by zero is not posible')
    }
    return a/b;
};

function calculator(x,y,operation) {
    var result = operation(x,y);

    return result;
}


try {
    console.log(calculator(1,2));

}catch (error){
    console.log(error);
}


console.log('Continue');