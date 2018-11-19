function asterikPyramidMiddle(rows, symbol1, symbol2, symbol3) {
    for (let index = 0; index < rows; index++) {
        // console.log(index, "identity-row");

        // (1) this is step one print symbol blank
        var space = "";
        for (let indexj = 0; indexj < (rows - index - 1); indexj++) {
            // console.log(index, "value-loops-step1");
            // console.log(indexj, "print-col-step1");
            space += symbol3;
        }


        // (2) this is step two print symbol asterik
        var asterik = "";
        for (let indexk = 0; indexk < (index + 1); indexk++) {
            // console.log(index, "value-loops-step2");
            // console.log(indexk, "print-col-step2");
            asterik += symbol1;
        }


        // (3) this is step three print symbol plus
        var middleasterik = "";
        var mid = (rows / 2) - 2;
        for (let indexl = 0; indexl < index; indexl++) {
            // console.log(index, "value-loops-step3");
            // console.log(indexl, "print-col-step3");

            // condition where are midle of coloumn  
            if (indexl > mid) {
                // console.log(indexl, mid);
                middleasterik += symbol2;
            } else {
                middleasterik += symbol1;
            }
        }

        // print several step
        console.log(space + asterik + middleasterik);
    }
}

// call function
asterikPyramidMiddle(21, "*", "+", " ");


/**
 * looping testing : 
    var asterik2 = "";
    var mid = rows / 2;
    for (let indexl = (index + 1); indexl > mid; indexl--) {
        console.log(indexl, "val-loops-step3");
        asterik2 += symbol1;
    }
 */