function convertChar(letter) {
    if (letter === "&") {
        return "&amp;"
    } else if (letter === "<") {
        return "&lt;"
    } else if (letter === ">") {
        return "&gt;"
    } else if (letter === '"') {
        return "&quot;"
    } else if (letter === "'") {
        return "&apos;"
    }
}


function convertHTML(str) {
    let charCheck = ["&", "<", ">", '"', "'"];
    for (let i = 0; i < str.length; i++) {
        if (charCheck.indexOf(str[i]) != -1) {
            str = str.slice(0, i) + convertChar(str[i]) + str.slice(i + 1);
        }
    }
    return str;
}

convertHTML("Dolce & Gabbana");
