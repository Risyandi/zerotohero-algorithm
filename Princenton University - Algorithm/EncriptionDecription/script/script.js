// declaration a variabel
var words = "lorem ipsum",
    // element = " ",
    passUserOne = "server",
    passUserTwo = "server";
var alphabetNum = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26
}
var letter = 'abcdefghijklmnopqrstuvwxyz';

/**
 * ----------------------
 * ways first 
 * ----------------------
 */

// function process encription
// function stringEncription(text, alphabetNum, passUserOne, passUserTwo) {
// testing
// console.log(passUserOne, "-> pass user 1");
// console.log(passUserTwo, "-> pass user 2");
// console.log(text, "-> text");
// console.log(alphabetNum, "-> alphaNum");

// check your pas userOne and userTwo 
// if (passUserOne == passUserTwo) {
//     console.log("password correct");
// get data alphabet
// for (const data in text) {
/**
 * result is boolean true: 
 * text.hasOwnProperty(data);
 */

// if (text[data] == " ") {
// text.replace(' ', 32);
// element += text[data];
// console.log(element, "data");
// console.log(text[data], "data");
// console.log(data, "data2");
// }
// }
// } else if (passUserOne != passUserTwo) {
//     console.log("error : password incorrect!");
// }

// loops for data alpaNum
// for (const dataNum in alphabetNum) {
//     const elementNum = alphabetNum[dataNum];
//     console.log(elementNum, "alphaNum");
// }
// }
// stringEncription(alphabet, alphabetNum, passUserOne, passUserTwo)


/**
 * add number once text, example :
 * 0a0k0u0 0p0e0r0g0i0 0k0e0 0s0e0k0o0l0a0h0 -> aku pergi kesekolah
 */
// function addElement(alphabet) {
//     var result = " ";
//     for (let index = 0; index < alphabet.length; index++) {
//         result = result + "0" + alphabet[index].substring(0, 1);
//     }
//     var alphabet2 = addSpace(result);
//     console.log(alphabet2, ": result encrypt");
//     return alphabet2;
// }
// addElement(alphabet);


/**
 * add number foreach meet whitespace 
 * and then changes whitespace as a number 32
 */
// function addSpace(alphabet) {
//     var result = "";
//     console.log(alphabet.split(' '), "cek split");

//     result = alphabet.split(' ').join('32');
//     return result;
// }
// addSpace(alphabet);



/**
 * -------------
 * ways seconds
 * -------------
 */


function Encryption(words) {
    var lowerWords = words.toLowerCase();
    console.log(lowerWords, ": process lowercase");
    var result = "";
    for (let index = 0; index < lowerWords.length; index++) {
        var wordsData = lowerWords[index];
        console.log(wordsData, ": words data");
        var indexWords = letter.indexOf(wordsData);
        console.log(indexWords, ": index words data");
        // if condition meet whitespace
        if (indexWords == -1) {
            // add number 32 on whitespace
            result += 32 + "-";
        } else {
            result += ((indexWords) + "0").toString();
        }
    }
    console.log(result, ": result words data");
    return result;
}
Encryption(words);


// var result = Encryption(words);
// function Decrypt(result) {
//     var testSaja = result.replace(/(\d\d-)/g, "");
//         console.log(testSaja, "remove 32-");
//     var resultAk = testSaja.replace(/(0)/g, "");
//         console.log(resultAk, "remove 0");
    //     console.log(resultAk.length, "length resultAK");
    //     console.log(testSaja.length, "length testSaja");
    // }   

// console.log(letter[1], "text of letter");
// Decrypt(result);

// // convert number to letter using charcode ascii
// for (let index = 1; index < letter.length + 1; index++) {
//     console.log(String.fromCharCode(index + 96), "text from ascii");
// }