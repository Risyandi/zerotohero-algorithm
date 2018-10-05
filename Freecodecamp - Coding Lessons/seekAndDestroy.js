function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !args.includes(val);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
/**
 * return value is delete several value
 */