function destroyer(arr) {
    //Make a new arr
    let newArgs = Array.from(arguments);
    //Splice it up
    newArgs.splice(0, 1);
    //newTarget is the newArgs
    let newTarget = newArgs;
    //Filtering the array
    return arr.filter(function (num) {
        //Returning only if it doesn't exist in the newTargets arr
        return newTarget.indexOf(num) === -1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
