 var words = "aku ada di pulau"; //est length is = 16
//  var words = "Ketua DPP Partai Hanura Inas Nasrullah Zubir mengungkapkan, dalam mitos Jawa, genderuwo merupakan bangsa jin atau makhluk halus yang berwujud manusia. Genderuwo memiliki tubuh besar dan suka menghisap darah manusia";
 var words_start = 0,
     temp = [''],
     token = "";

//  ways 1
//  breaks words into tokenize with define spaces
// for (let index = 0; index < words.length; index++) {
//     if (words[index] == " ") {
//         words_end = index;
//         for (let indexj = words_start; indexj < words_end; indexj++) {
//             temp = words[indexj];
//             console.log(temp);
//         }
//         words_start = words_end + 1;
//     }
// }



// ways 2 
// breaks words into tokenize with define spaces
// token = words.split(" ");
// console.log(token, "split");
// for (let index = 0; index < token.length; index++) {
//     console.log(token[index] + " - " + "have length = " + token[index].length);
    // var lengthText = token[index].length;
    // console.log(lengthText, "hoola");
    // console.log(token[index], " = words2"); // per words
    // temp = token[index];
    // token = temp;
    // console.log(token, "token");
    
    // you can use this loop if you can get string
    // for (let indexj = words_start; indexj < lengthText; indexj++) {
        // console.log(token[index][indexj], "words"); // per string
        // console.log(token[index], "words2"); // per string
    // }
// }



// ways 3
//  breaks words into tokenize with define spaces
// function token(sampleInput, delimeter) {
//     var stringArray = [''];
//     var j = 0;
//     for (let index = 0; index < sampleInput.length; index++) {
//         if (sampleInput.charAt(index) == delimeter) {
//             j++;
//             stringArray.push('');
//         } else {
//             stringArray[j] += sampleInput.charAt(index);
//         }
//     }
//     console.log(stringArray);
//     return stringArray;
// }
// token(words, " ");


/**
 * noted:
 * split(); is method for split based on delimeter
 * charAt(); is method for search position of character
 * push(); is method for adding string or character to array
 */