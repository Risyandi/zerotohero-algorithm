function sumAll(arr) {
    var sort = arr.sort((a, b) => a - b);
    var first = arr[0];
    var last = arr[1];

    var sum = (last - first + 1) * (first + last) / 2;
    return sum;
}

sumAll([1, 4]);
/**
 * return value [1, 4] = 10
 */