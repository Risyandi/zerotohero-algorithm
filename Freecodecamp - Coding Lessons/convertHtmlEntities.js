function convertHTML(str) {
    // split character 
    var temp = str.split('');
    console.log(temp, "result split");

    // since we are only checking for a few HTML elements I used a switch
    for (let index = 0; index < temp.length; index++) {
        console.log(temp[index]);
        switch (temp[index]) {
            case '<':
                temp[index] = '&lt;';
                break;
            case '&':
                temp[index] = '&amp;';
                break;
            case '>':
                temp[index] = '&gt;';
                break;
            case '"':
                temp[index] = '&quot;';
                break;
            case "'":
                temp[index] = "&apos;";
                break;
        }
    }
    temp = temp.join('');
    return temp;
}

// call function
convertHTML("Dolce & Gabbana");

/**
 * noted :
 * split() : is used to split a string into an array of substrings, and returns the new array.
 * join() : is method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
 */