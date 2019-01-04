var letter = 'abcdefghijklmnopqrstupwxyz';

// function encryption
function encryptionProcess(dataTextEnc, dataPassEnc) {

    // get value from form encryption
    dataTextEnc = document.querySelector('#words-text-enc').value;
        console.log(dataTextEnc, ":dataText");
    dataPassEnc = document.querySelector('#password-enc').value;
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
        // check condition
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

// get value from form decryption
function decryptionProcess() {
    // get value from form encryption and decryption
    dataPassEnc = document.querySelector('#password-enc').value;
        console.log(dataPassEnc, ":dataPassEnc");
    dataPassDec = document.querySelector('#password-dec').value;
        console.log(dataPassDec, ":dataPassDec");
    dataTextEnc = document.querySelector('#words-text-dec').value;
        console.log(dataTextEnc, ":data encryption");
    
    // check value of password
    if (dataPassEnc != dataPassDec) {
        alert("password tidak sama, harap masukan password yang sama !");
        // call action if you have wrong password
    } else 
    if (dataPassEnc == dataPassDec) {
        alert("password sama!");
        // call action to decryption text of result encryption
        // var resultDecr = dataTextEnc.replace(/(\d\d-)/g, "");
        //     console.log(resultDecr, "remove 32-");
        // var resultDecrFinal = resultDecr.replace(/(0)/g, "");
        //     console.log(resultDecrFinal, "remove 0");
        //     console.log(letter[1], letter[3], "text");
        // document.querySelector('#result-dec').value = resultFinal;
    }

}

// listen event click for process encryption
var elmEnc = document.getElementById("button-encrypt");
    elmEnc.addEventListener("click", encryptionProcess, false);

var elmDec = document.getElementById("button-decrypt");
    elmDec.addEventListener("click", decryptionProcess, false);
