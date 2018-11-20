function pairElement(str) {
    var pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    // split input
    var arr = str.split("");
    // loop with method map
    return arr.map(x => [x, pairs[x]])
}

pairElement("GCG");