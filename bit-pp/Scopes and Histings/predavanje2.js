// Declare a global variable, even without var.

var scope = "global";

function checkScope2() {

// Oops! We just changed the global variable.

scope = "local";

// This implicitly declares a new global variable.

myScope = "local";

return [scope, myScope]; // Return two values.

}

checkScope2() // ["local", "local"]: has side effects!

console.log(scope)

// console.log(myScope)