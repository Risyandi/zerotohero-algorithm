/**
 * intermediate solution
 */
function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    // convert the argument object into an array
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    
    // use reduce function to flatten the array
    newArr = args.reduce(function (arrA, arrB) {
        // apply filter to remove the duplicate elements in the array
        return arrA.concat(arrB.filter(function (i) {
            return arrA.indexOf(i) === -1;
        }));
    });
    console.log(newArr);
    return newArr;
}

// call function
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

/**
 * noted :
 * slice() : is method returns the selected elements in an array, as a new array object.
 * filter() : is  method creates a new array with all elements that pass the test implemented by the provided function.
 * reduce() : is method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
 * indexOf() : is method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * call() : is method calls a function with a given this value and arguments provided individually.
 */