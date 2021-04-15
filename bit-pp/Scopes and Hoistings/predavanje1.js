var scope = "global";

function checkScope() {

// Declare a local variable with the same name

var scope = "local";

// Return the local value, not the global one

return scope;

}

var result = checkScope() // => "local"

// console.log(scope);

// console.log(result);