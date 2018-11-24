/**
 * ways 1
 */
// Declare a variable for the function reverseTokenize()
// var words = "how are you";
// var wordsTemp = [''],
//     indexj = 0;

// function ReverseTokenize(words, delimeter) {
//     console.log(words.length, "words length");
//     var wordsLength = words.length;
//     for (let index = wordsLength - 1; index > 0 - 1; index--) {
//         console.log(index, "index");
//         console.log(words[index], "val index");
//         if (words[index] == delimeter) {
//             // console.log(words[index], "words index"); // just printed a space
//             indexj++;
//             wordsTemp[indexj] = "";
//         } else {
//             // console.log(indexj, "indexj");
//             wordsTemp[indexj] += words[index];
//         }
//     }
//     console.log(wordsTemp);
// }

// ReverseTokenize(words, " ");

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
 * ways 2
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
 * ways 3
 */

var words = "how are you"; 
function reverse(words) {
    // console.log(words.split(''));
    // console.log(words.split('').reverse());
    // console.log(words.split('').reverse().join(''));
    return words.split('').reverse().join('');
}

function tokenize(words) {
    const reversed = reverse(words); // 2
    const normal = reverse(reversed); // 4
    const result = normal.split(' '); // 3 and 5
    console.log(result);
    return result;
}

tokenize(words);