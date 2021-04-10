var global = 123;

function myFunc() {

console.log(global);

var global = 1;

console.log(global);

}

var global = 123;

function myFunc() {

var global; //same: var global = undefined;

console.log(global); //undefined

global = 1;

console.log(global); // 1