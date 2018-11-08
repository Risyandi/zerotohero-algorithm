// solution advanced
function spinalCase(str) {
    var result = str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
    return result;
}

// solution basic
function spinalCase(str) {
    // initialization regex criteria
    var regex = /\s+|_+/g;

    // replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // replace space and underscore with -
    var result = str.replace(regex, '-').toLowerCase();
    return result;
}

// call function spinalCase
spinalCase('This is Spinal case');

/**
 * code explanation :
 * 1. regex contains the regular expression /\s+|_+/g, will select all spaces and underscores
 * 2. replace(); is a method for puts a space before any encountered uppercase  characters in the string str so that the spaces can be replaced  by dashes later on
 * 3. while returning the string, another replace(); replaces spaces and underscores with dashes using regex 
 */