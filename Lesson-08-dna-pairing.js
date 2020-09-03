function pairElement(str) {
    //making pairs
    var pair = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split array
    var arr = str.split("");
    //map & match
    return arr.map(x => [x, pair[x]]);
}

pairElement("GCG");