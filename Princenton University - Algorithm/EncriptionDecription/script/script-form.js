var letter = 'abcdefghijklmnopqrstuvwxyz';

// function encryption
function encryptionProcess(dataTextEnc, dataPassEnc) {
    // get value from form encryption
    dataTextEnc = document.querySelector('#words-text-enc').value;
        console.log(dataTextEnc, ":data text");
    dataPassEnc = document.querySelector('#password-enc').value;
        console.log(dataPassEnc, ":data pass");

    // text to lowercase
    var lowerWords = dataTextEnc.toLowerCase();
        console.log(lowerWords, ":lower words");
    
    //  looping data for appear data
    var result = "";
    for (let index = 0; index < lowerWords.length; index++) {
        // init data
        var wordsData = lowerWords[index];
            console.log(wordsData, ":words data");
        var indexWords = letter.indexOf(wordsData);
            console.log(indexWords, ":index words");
        // check condition value of indexWords
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
        // test alert
        // alert("password sama!");
        
        // remove 32-
        var replaceOne = dataTextEnc.replace(/(\d\d-)/g, " ");
            console.log(replaceOne, ":one");
        // remove duplicate zero number
        var replaceTwo = replaceOne.replace(/(00)/g, "v-");
            console.log(replaceTwo, ":two");
        // remove zero number as separate
        var replaceThree = replaceTwo.replace(/(0)/g, "-");
            console.log(replaceThree, ":three");
        // remove symbol v as zero number
        var resultDecrFinal = replaceThree.replace(/(v)/g, "0");
            console.log(resultDecrFinal, ":final");

        // convert number to letter
        var finishResult = resultDecrFinal.replace(/([\d]{1,2})([^\d]|$)/g, function (match, p1, p2) {
            return letter[Number(p1) - 1] + (p2 == "-" ? "" : p2);
        });

        document.querySelector('#result-dec').value = finishResult;
    }
}

// listen event click for process encryption
var elmEnc = document.getElementById("button-encrypt");
    elmEnc.addEventListener("click", encryptionProcess, false);

// listen event click for process decryption
var elmDec = document.getElementById("button-decrypt");
    elmDec.addEventListener("click", decryptionProcess, false);
