// Define receivesAFunction function
function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
}

// Define returnsANamedFunction function
function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
        // Function body
    }
    return namedFunction;
}

// Define returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // Function body
    };
}
