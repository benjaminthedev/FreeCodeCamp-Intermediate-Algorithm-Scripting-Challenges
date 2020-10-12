function uniteUnique(arr) {
    let finalArr = [];
    let values = Object.values(arguments);

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
            if (finalArr.indexOf(values[i][j]) === -1) {
                finalArr.push(values[i][j])
            }
        }
    }
    return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
