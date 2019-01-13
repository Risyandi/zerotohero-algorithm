function dropElements(arr, func) {
    var times = arr.length
    for (let index = 0; index < times; index++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}


dropElements([2, 1, 2, 3], function (n) {
    return n < 3;
});