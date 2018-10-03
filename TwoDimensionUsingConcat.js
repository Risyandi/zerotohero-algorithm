/**
 * this is a assignment basic algorithm 
 * to find number in Two Dimenesion Array and join two array using concat
 */
function findNumber(arr1, arr2) {
    let numbFind = 4;
    let array3 = [];
    var indexRow, indexColoumn, coloumn, row;
    row = 4; coloumn = 3; indexRow = 0;

    while (indexRow < row) {
        indexColoumn = 0;
        while (indexColoumn < coloumn) {
            array3 = arr1.concat(arr2);
            array3 = array3[indexRow][indexColoumn];
            if (numbFind == array3) {
                console.log("number found " + array3, "the value is on ROW " + indexRow, "and COLOUMN " + indexColoumn);
            }
            console.log(array3);
            indexColoumn++;
        }
        indexRow++;
    }
}

findNumber(
    [[0, 1, 2], [3, 4, 5]],
    [[6, 7, 8], [9, 10, 11]]
);