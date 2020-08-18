function sumAll(arr) {
    //finding the min num
    const minNum = Math.min(arr[0], arr[1]);
    console.log(minNum);
    //finding the max num
    const maxNum = Math.max(arr[0], arr[1]);
    console.log(maxNum);
    //making the end result 0
    let endResult = 0;
    //For looping through the results
    for (var i = minNum; i <= maxNum; i++) {
        console.log(i, " <= i", endResult, " <= endResult");
        endResult += i;
    }
    //returning the new end result.
    return endResult;
}

sumAll([1, 4]);
