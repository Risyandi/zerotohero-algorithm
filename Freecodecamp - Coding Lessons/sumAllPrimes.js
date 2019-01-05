// sum all primes
// create a function for sum a primes number
function sumPrimes(num) {
    var res = 0;
    // create function to get the primes up to max in an array
    function getPrimes(max) {
        var sieve = [],
            primes = [],
            indexI, indexj;
        for (let indexI = 2; indexI <= max; ++indexI) {
            console.log(indexI, "index");
            if (!sieve[indexI]) {
                console.log(sieve[indexI], "sieve index");
                // indexI has not been marked -- it is primes
                primes.push(indexI);
                console.log(primes, "primes");
                for (let indexj = 0; indexj <= max; indexj += indexI) {
                    sieve[indexj] = true;
                }
            }
        }
        return primes;
    }

    // add the primes
    var primes = getPrimes(num);
    console.log(primes.length, "length primes");
    // loops value of primes
    for (var p = 0; p < primes.length; p++) {
        // result primes
        res += primes[p];
        console.log(res, "result");
    }
    return res;
}

sumPrimes(10);
