function asterikPyramid(rows, symbol1, symbol2) {
    for (let index = 0; index < rows; index++) {
        // console.log(index, "index");

        // this is step one to print empty spaces
        var space = "";
        for (let indexj = 0; indexj < (rows - index - 1); indexj++) {
            // console.log(indexk, "indexk");
            space += symbol2;
        }

        // this is step two to print asteriks
        var asterik = "";
        for (let indexk = 0; indexk < (2 * index); indexk++) {
            // console.log(indexj, "indexj");
            asterik += symbol1;
        }

        // print asterik to console 
        console.log(space + asterik);
    }
}

// call function
asterikPyramid(6, "*", " "); 