function whatIsInAName(collection, source) {
    // get the source to find
    var src = Object.keys(source);

    // filter the collection 
    return collection.filter(function (obj) {
        for (let index = 0; index < src.length; index++) {
            if (!obj.hasOwnProperty(src[index]) || obj[src[index]] !== source[src[index]]) {
                return false;
            }
        }
        return true;
    });
}

// call function
whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
);

/**
 * code explanation :
 * 1. we get object source using Object.keys();
 * 2. we filter collection using filter(); and given a function with params obj
 * 3. loops the collection 
 * 4. check with condition criteria
 */