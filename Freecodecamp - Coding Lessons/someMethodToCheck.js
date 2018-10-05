function checkPositive(arr) {
    return arr.some(function (current) {
        return current > 0;
    })
}
checkPositive([1, 2, 3, -4, 5]);
/**
 * return boolean to check value in array using some method
 */