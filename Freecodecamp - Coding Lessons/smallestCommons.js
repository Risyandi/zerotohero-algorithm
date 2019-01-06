function smallestCommons(arr) {
    var range = [];
    for (let index = Math.max(arr[0], arr[1]); index >= Math.min(arr[0], arr[1]); index--) {
        range.push(index);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (let index = 1; index < range.length; index++) {
        var GCD = gcd(lcm, range[index]);
        lcm = (lcm * range[index]) / GCD;
    }
    return lcm;

    function gcd(x, y) {
        if (y === 0) 
            return x;
        else
            return gcd(y, x%y);
    }
}

// call function
smallestCommons([1,5]);