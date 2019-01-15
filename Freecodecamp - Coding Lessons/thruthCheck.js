function truthCheck(collection, pre) {
    // create a counter to check how many are true
    var counter = 0;
    
    // check foreach object
    for (var c in collection) {
        console.log(collection[c], "value collection");
        // if it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    } 
    // outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");