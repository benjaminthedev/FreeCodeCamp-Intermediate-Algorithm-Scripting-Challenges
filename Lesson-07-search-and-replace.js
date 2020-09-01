function myReplace(str, before, after) {
    //Split the string
    const strAll = str.split(" ");
    //loop through the string
    for (let i = 0; i < strAll.length; i++) {
        //if string index is equal to before
        if (strAll[i] === before) {
            //if string index 0 is equal to index 0 toUpperCase
            if (strAll[i][0] === strAll[i][0].toUpperCase()) {
                //Making upper case 
                after = after[0].toUpperCase() + after.slice(1);
            } else {
                //else making lower case
                after = after[0].toLowerCase() + after.slice(1);
            };
            //string to after
            strAll[i] = after;
        }
    }
    //return join string
    return strAll.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

