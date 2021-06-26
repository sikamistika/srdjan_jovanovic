var fruits = ["apple", "banana", "orange", "strawberry"];
var newFruit = fruits.push("cherry");
var last = fruits.pop();
fruits.forEach(function(item, index, array) {
    console.log(item, index, array)
});