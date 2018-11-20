function ConsonantLoops(words) {
    const vowels = 'aiueo';
    var consonant = '';

    for (let index = 0; index < words.length; index++) {
        /**
         * method includes();
         * is return true if search string appears a substring 
         */
        if (vowels.includes(words[index])) {
            console.log(words[index]);
        } else {
            consonant += words[index] + '\n';
            // consonant = consonant.trim();
            // console.log(consonant);
        }
    }
    // console.log(consonant);
    console.log(consonant.trim());
}

ConsonantLoops('javascriptloops');