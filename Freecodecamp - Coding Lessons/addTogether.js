function addTogether() {
    // function to check if a number is actually a number and return undefined otherwise
    var checkNum = function (num) {
        if (typeof num !== 'number') {
            return undefined;
        } else
            return num;
    };

    // check if we have two parameters, check if they are numbers handle the case where one is not returns the addition
    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {
        // if only one paramater was found, returns a new function that excepts to store first argument before entering the new function scope
        var c = arguments[0];

        // check the number again, must be outside the function to about returning an object instead of undefined
        if (checkNum(c)) {
            // return function that expect a second argument.
            return function (args2) {
                // check for non-numbers
                if (c === undefined || checkNum(args2) === undefined) {
                    return undefined;
                } else {
                    // if numbers then add them
                    return c + args2;
                }
            }
        }
    }
}

addTogether(2, 3);