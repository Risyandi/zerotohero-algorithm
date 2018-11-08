function myReplace(str, before, after) {
    // create regex for function replace
    var regex = new RegExp(before, "gi");
    // check whether the first letter is uppercase or not
    if (/[A-Z]/.test(before[0])) {
        // change the word to be capitalized
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    //Replace the original word with new one
    var resultStr = str.replace(regex, after);
    return resultStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");