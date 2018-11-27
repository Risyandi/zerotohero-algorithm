/**
 * ---------------------------------
 * ways 1
 * ---------------------------------
 */

// Declare a variable for the function reverse()
// var words = "how are you";
var words = "Ketua DPP Partai Hanura Inas Nasrullah Zubir mengungkapkan, dalam mitos Jawa, genderuwo merupakan bangsa jin atau makhluk halus yang berwujud manusia. Genderuwo memiliki tubuh besar dan suka menghisap darah manusia";
// var wordsTest = "uoy era woh";

// function reverse with decrement 
function Reverse(words) {
    var wordsLength = words.length;
    // console.log(wordsLength, "words length");
    var reverseWords = "";
    for (let index = wordsLength - 1; index >= 0; index--) {
        reverseWords += words[index];
        // console.log(reverseWords, "words result reverse");
    }
    return reverseWords;
}

// function tokenize
function Tokenize(words, delimeter) {
    var indexj = 0,
        wordsTokenize = [""];
    var wordsReverse = Reverse(words);
    console.log("\x1b[34m" + "Process 1 Reverse: " + wordsReverse + " [words reverse]");
    var wordsReverseLength = wordsReverse.length;
    // console.log(wordsReverseLength, "length words reverse");
    // var wordsNormal = Reverse(wordsReverse);
    // console.log(wordsNormal);

    var word = "";
    for (let index = wordsReverseLength - 1; index >= 0; index--) {
        word += wordsReverse[index];
        if (wordsReverse[index] == delimeter) {
            indexj++;
            wordsTokenize[indexj] = "";
        } else {
            wordsTokenize[indexj] += wordsReverse[index];
        }
    }
    console.log("\x1b[32m" + "Process 2 Normalization: " + word + " [words normal]");
    console.log(wordsTokenize);
    return wordsTokenize;
}
Tokenize(words, " ");

/**
 * sorting with method in javascript
 * name_array.sort();
 * 
 * example : 
 * var num = ["bandung", "hallo"];
 * num.sort();
 * console.log(num); 
*/



/**
 * ---------------------------------
 * ways 2
 * ---------------------------------
 */

// var arr = ["w","o","h","o","o"];
// function selectionSort(arr) {
//     var minIndex, temp,
//         wordsLength = arr.length;
//     console.log(wordsLength, "length");
//     for (let index = 0; index < wordsLength; index++) {
//         minIndex = index;
//         console.log("--------");
//         console.log(minIndex, "index");
//         for (let indexj = index + 1; indexj < wordsLength; indexj++) {
//             console.log(indexj, "indexj");
//             console.log(arr[indexj] + " arr indexj > ", arr[minIndex] + " arr index");
//             if (arr[indexj] < arr[minIndex]) {
//                 minIndex = indexj;
//                 // console.log(indexj, "val indexj");
//                 // console.log(minIndex, "val minIndex");
//             }
//         }
//         temp = arr[index];
//         console.log(temp, "value of temp");
//         arr[index] = arr[minIndex];
//         console.log(arr[index], "arr index");
//         arr[minIndex] = temp;
//         console.log(arr[minIndex], "arr minIndex");
//     }
//     console.log(arr);
//     return arr;
// }
// selectionSort(arr);




/**
 * ---------------------------------
 * ways 3
 * ---------------------------------
 */

// var words = "how are you"; 
// function reverse(words) {
//     // console.log(words.split(''));
//     // console.log(words.split('').reverse());
//     // console.log(words.split('').reverse().join(''));
//     return words.split('').reverse().join('');
// }

// function tokenize(words) {
//     const reversed = reverse(words); // 2
//     console.log(reversed, "hasil reserved");
    
//     const normal = reverse(reversed); // 4
//     console.log(normal, "hasil normal");
    
//     const result = normal.split(' '); // 3 and 5
//     console.log(result);
//     return result;
// }
// tokenize(words);