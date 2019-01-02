var letter = 'abcdefghijklmnopqrstupwxyz';

// function encryption
function encryptionProcess() {
    // get value from form encryption
    var dataTextEnc = document.querySelector('#words-text-enc').value;
        console.log(dataTextEnc, ":dataText");
    var dataPassEnc = document.querySelector('#password-enc').value;
        console.log(dataPassEnc, ":dataPass");
    
    // text to lowercase
    var lowerWords = dataTextEnc.toLowerCase();
        console.log(lowerWords, ":lowerWords");
    
    //  looping data 
    var result = "";
    for (let index = 0; index < lowerWords.length; index++) {
        var wordsData = lowerWords[index];
            console.log(wordsData, ":wordsData");
        var indexWords = letter.indexOf(wordsData);
            console.log(indexWords, ":indexWords");

        if (indexWords == -1) {
            // condition meet space changes as number "32"
            result += 32 + "-";
        } else {
            // condition once alphabet attach number "0"
            result += ((indexWords + 1) + "0").toString();
        }
    }
    // set value on input fields
    document.querySelector('#result-enc').value = result;
}

// listen event click for process encryption
var elmEnc = document.getElementById("button-encrypt");
elmEnc.addEventListener("click", encryptionProcess, false);


// get value from form decryption
