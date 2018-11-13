var words = "Ketua DPP Partai Hanura Inas Nasrullah Zubir mengungkapkan, dalam mitos Jawa, genderuwo merupakan bangsa jin atau makhluk halus yang berwujud manusia. Genderuwo memiliki tubuh besar dan suka menghisap darah manusia";

//  token = "",
// var words = "How are you"; // 11
// var words_temp = [''];
// var temp = "";


//  ways 1
//  breaks words into tokenize with define spaces
var words_temp = [''],
    indexj = 0;
function tokenize(words, delimeter) {
    for (let index = 0; index < words.length; index++) {
        // appear indexing
        console.log(index, "index");

        if (words[index] == delimeter) {
            // increment indexj
            indexj++;
            // appear num indexing num array
            console.log(indexj, "num indexing array");
            
            // push delimeter space as empty to the words_temp[]
            words_temp[indexj] = "";

            var input_empty = words_temp[indexj] = "";
            console.log(input_empty, "empty");
        } else {
            // join words to the words_temp[]
            words_temp[indexj] += words[index];

            // result can be ["val", "val", "val"]
            result = words_temp;
        }
    }
}
tokenize(words, " ");
console.log(result);



// ways 2 
// breaks words into tokenize with define spaces
// token = words.split(" ");
// console.log(token, "split");
// for (let index = 0; index < token.length; index++) {
//     console.log(token[index] + " - " + "have length = " + token[index].length);
//     var lengthText = token[index].length;
//     console.log(lengthText, "hoola");
//     console.log(token[index], " = words2"); // per words
//     temp = token[index];
//     token = temp;
//     console.log(token, "token");

//     you can use this loop if you can get string
//     for (let indexj = words_start; indexj < lengthText; indexj++) {
//         console.log(token[index][indexj], "words"); // per string
//         console.log(token[index], "words2"); // per string
//     }
// }



// ways 3
// breaks words into tokenize with define spaces
// function token(words, delimeter) {
//     var stringArray = [''],
//         j = 0;
//     for (let index = 0; index < words.length; index++) {
//         // if (words.charAt(index) == delimeter) {
//         if (words[index] == delimeter) {
//             // increment of number of stringArray[]
//             j++;
//             // push empty to stringArray[]
//             stringArray.push('');
//         } else {
//             // stringArray[j] += words.charAt(index);
            
//             // join the text to stringArray[]
//             stringArray[j] += words[index];
//         }
//     }
//     console.log(stringArray);
//     return stringArray;
// }
// token(words, " ");


// ways 4
// function tokenize(str, delimeter) {
//     const tokens = [[]];
//     for (const char of new String(str)) {
//         if (char === delimeter) {
//             if (tokens[tokens.length - 1].length > 0) {
//                 tokens.push([]);
//             } else {
//                 tokens[tokens.length - 1].push(char);
//             }
//         }
//         return tokens.map(chars => chars.join(""));
//     }
// }
// tokenize(words, " ");


/**
 * noted:
 * split(); is method for split based on delimeter
 * charAt(); is method for search position of character
 * push(); is method for adding string or character to array
 */