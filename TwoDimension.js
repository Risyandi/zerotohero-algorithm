/**
 * this is a assignment basic algorithm 
 * to find number in Two Dimension Array  
 */
function findNumber(arr1, arr2) {
    let numbFind = 12;
    let array3 = [];
    let array1, array2, indexRow, indexColoumn, coloumn, row;
    row = 2; coloumn = 3; indexRow = 0;
    while (indexRow < row) {
        indexColoumn = 0;
        while (indexColoumn < coloumn) {
            array1 = arr1[indexRow][indexColoumn];
            array2 = arr2[indexRow][indexColoumn];
            array3 = [array1, array2];
            console.log(array3[0], "array 1", " | ", array3[1], "array 2");

            let get = document.getElementById("content");
            let text = "";

            if (numbFind == array3[0]) {
                console.log("Number Found " + "(" + array3[0] + ")", "The Value Is On Array1 ROW " + indexRow, "And COLOUMN " + indexColoumn);
                text += `<div>Number Found <b>${array3[0]}</b> The Value Is On Array1 ROW <b>${indexRow}</b> And COLOUMN <b>${indexColoumn}</b></div>`;
                get.innerHTML = text;
            } else if (numbFind == array3[1]) {
                console.log("Number Found " + "(" + array3[1] + ")", "The Value Is On Array2 ROW " + indexRow, "And COLOUMN " + indexColoumn);
                text += `<div>Number Found <b>${array3[1]}</b> The Value Is On Array2 Row <b>${indexRow}</b> And Coloumn <b>${indexColoumn}</b></div>`;
                get.innerHTML = text;
            }
            indexColoumn++;
        }
        indexRow++;
    }
}

findNumber(
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]]
);