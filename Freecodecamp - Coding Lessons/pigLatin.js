// basic solution
function translatePigLatin(str) {
    // create variable 
    var pigLatin = "";
    var regex = /[aiueo]/gi;

    // check if the first character vowel
    if (str[0].match(regex)) {
        pigLatin = str + "way";
    } else if (str.match(regex) === null) {
        // check if the string contains only consonants
        pigLatin = str + "ay";
    } else {
        // find how many consonant before the first vowel
        var vowelIndice = str.indexOf(str.match(regex)[0]);
        /** take the string from the first  vowel to the last char
         *  then add the consonant that were previously omitted and and add the ending
        */
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }
    return pigLatin;
}

// intermediate solution 
function translatePigLatin(str) {
    function check(obj) {
        return ['a', 'i', 'u', 'e', 'o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
    }

    return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// call function of pigLatin();
translatePigLatin("consonant");