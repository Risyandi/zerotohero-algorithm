// *** looping using for
function findNumber(arr) {
    var NumbFind = 15;
    for (let indexA = 0; indexA < arr.length; indexA++) {
        let indexAB = arr[indexA].length;
        for (let indexB = 0; indexB < indexAB; indexB++) {
            var value = arr[indexA][indexB];
            console.log(value);
            if (NumbFind == value) {
                console.log(value, "I'm Here");
                var get = document.getElementById("content");
                var text = "";
                text += `<div>Number found ${value} | The number there is on array</div>`;
                get.innerHTML = text;
            }
        }
    }
}

findNumber([[1, 2, 3, 4, 5],
[11, 12, 15, 17, 18],
[20, 21, 50, 17, 18]
]);

// ===============================================================================================================

// *** using length
function findNumber(arr) {
    let numbFind = 1;
    var indexA, indexB;
    indexA = 0;
    while (indexA < arr.length) {
        indexB = 0;
        while (indexB < arr[indexA].length) {
            console.log(arr[indexA][indexB]);
            if (numbFind == arr[indexA][indexB]) {
                let value = arr[indexA][indexB];
                console.log(value, "I'm Here");
                let get = document.getElementById("content");
                let text = "";
                text += `<div>Number found <b>${value}</b> | The number there is on multi dimensional array [[1, 2, 3, 4, 5], [11, 12, 15, 17, 18], [20, 17, 50, 17, 18]]</div>`;
                get.innerHTML = text;
            }
            indexB++;
        }
        indexA++;
    }
}

findNumber([[1, 2, 3, 4, 5],
[11, 12, 15, 17, 18],
[20, 17, 50, 17, 18]
]);

// ===============================================================================================================

// *** using const number
function findNumber(arr) {
    let numbFind = 71;
    var indexRow, indexColoumn, column, row;
    row = 3; column = 5; indexRow = 0; 
    while (indexRow < row) {
        indexColoumn = 0;
        while (indexColoumn < column) {
            if (numbFind == arr[indexRow][indexColoumn]) {
                let value = arr[indexRow][indexColoumn];
                console.log("number found " + value, "the value is on ROW " + indexRow, "and COLOUMN " + indexColoumn);
                let get = document.getElementById("content");
                let text = "";
                text += `<div>number found <b>${value}</b> the value is on row <b>${indexRow}</b> and coloumn <b>${indexColoumn}</b></div>`;
                get.innerHTML = text;
            }
            indexColoumn++;
        }
        indexRow++;
    }
}

findNumber(
    [[1, 2, 3, 4, 5],[11, 12, 15, 71, 18],[20, 17, 50, 79, 18]]
);

// ===============================================================================================================