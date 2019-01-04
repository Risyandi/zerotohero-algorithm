// sum all odd fibonacci
function sumFibs(num) {
    var prevNumber = 0, 
        currentNumber = 1,
        result = 0;
    while (currentNumber <= num) {
        if (currentNumber % 2 !== 0 ) {
            result += currentNumber;
            console.log(result, "result");
        }
        currentNumber += prevNumber;
            console.log(currentNumber, "current number");
        prevNumber = currentNumber - prevNumber;
            console.log(prevNumber, "previous number");
    }

    return result;
}

sumFibs(1000);