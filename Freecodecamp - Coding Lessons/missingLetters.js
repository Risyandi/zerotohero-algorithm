function missingLetters(words) {
    for (let index = 0; index < words.length; index++) {
        /**
         * code of current character
         */
        var code = words.charCodeAt(index);
        console.log(code, "number of ascii");
        
        /**
         * if code of current character is not equal to first character
         * + no of iteration hence character has been escaped
         */
        if (code !== words.charCodeAt(0) + index) {
        console.log(words.charCodeAt(0), index);
        
        /** 
         * if current character has escaped one character find 
         * previous char and return
         */
        return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

missingLetters("abce");
