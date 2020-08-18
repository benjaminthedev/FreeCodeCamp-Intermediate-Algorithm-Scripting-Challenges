function diffArray(arr1, arr2) {

    //Combine the two arrays 
    const combinedArr = arr1.concat(arr2);
    //Using filter to filter the arrau
    const filterArr = combinedArr.filter(i => !arr1.includes(i) || !arr2.includes(i));
    //Checking the arr
    console.log(filterArr);
    //returning the filtered array
    return filterArr;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
