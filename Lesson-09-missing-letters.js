function fearNotLetter(str) {
    for (var i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
        if (str.indexOf(String.fromCharCode(i)) == -1) { return String.fromCharCode(i); }
    }
}

fearNotLetter("abce");