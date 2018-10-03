/**
 * this is a assignment basic algorithm 
 * to Quick Find number   
 */

function QuickFind(n) {
    // Declare "this.id" is empty
    this.id = [];
    var index = 0;

    // Declare start for index is null.
    // Implement looping with while, where looping count until value of n.

    // ** while method ** //
    while (index < n) {
        this.id[index] = index;
        index++;
    }

    // ** do while method ** //
    // do {
    //     this.id[index] = index;
    //     index++;
    // } while (index < n);

    // Create a function for connected with criteria.
    // and then id[p] between id[q] equals same, if true doing command.
    this.connected = function (p, q) {
        return this.id[p] === this.id[q];
    }

    // Create a function for union.
    // First declare variable "pid" and "qid". for dump value from "this.id[p]" & "this.id[q]".
    // After create a variable, next create looping where count loop until "this.id.length".
    // And then create condition where "this.id[i]" equal same with "pid".  
    // Return value qid to "this.id[i]"
    this.union = function (p, q) {
        var pid = this.id[p];
        var qid = this.id[q];
        for (let index = 0; index < this.id.length; index++) {
            if (this.id[index] === pid) {
                return this.id[index] = qid;
            }
        }
    }
}

let Data = new QuickFind(10);
console.log(Data, "result find");

let DataSecond = Data.connected(2, 2);
console.log(DataSecond, "result connected");

let DataThird = Data.union(2, 3);
console.log(DataThird, "result union");

// =========================================================================================================

function display(str) {
    $('#msgs').append($('<div>').text(str));
}

var cubes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for (var j = 0; j < cube.length; j++) {
        display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}

// =========================================================================================================

var testData = [
["column1", "test1", "test1", "tea", "party", "water bottle"],
["column2", "test2", "test2", "test2 test2"],
["column3", "test2", "test2", "test2 test2 "],
["column4", "test2", "test2 test2f asdfsdf"],
["column5", "test2", "test2 test2f asdfsdfasdfasdfasa asda asdfsas"]
];
for (var i = 0; i < testData.length; i++) {
    for (var j = 0; j < testData[i].length; j++) {
        alert(testData[i][j]);
    }
}