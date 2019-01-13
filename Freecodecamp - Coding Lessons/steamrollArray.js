function steamrollArray(arr) {
    var flattenArray = [];
    // create a function that adds an element if it is not array.
    var flatten = function (args) {
        if (!Array.isArray(args)) {
            flattenArray.push(args);
        } else {
            for (var a in args) {
                flatten(args[a]);
            }
        }
    };
    // call the function foreach element in the array
    arr.forEach(flatten);
    return flattenArray;
}

steamrollArray([1, [2], [3, [[4]]]]);