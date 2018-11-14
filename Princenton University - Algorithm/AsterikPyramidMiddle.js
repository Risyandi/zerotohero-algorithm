function asterikPyramidMiddle(rows, symbol1, symbol2, symbol3) {
    for (let index = 0; index < rows; index++) {
        console.log(index, "index");
        // this is step one to print empty spaces
        var space = "";
        for (let indexj = 0; indexj < (rows - index - 1); indexj++) {
            console.log(indexj, "indexj");
            space += symbol2;
        }

        // this is step two to print asterik
        var asterik = "";
        var middle = rows / 2; // flag middle
        for (let indexk = 0; indexk < (2 * index); indexk++) {
            console.log(indexk, "indexk", index, "index");
            if (indexk > middle) {
                asterik += symbol3;
                console.log(indexk, index, "step1");
            } else {
                asterik += symbol1;
                console.log(indexk, index, "step2");
            }
        }
        // print asterik to console
        console.log(space + asterik);
    }
}

// call function
asterikPyramidMiddle(10, "*", " ", "-"); 