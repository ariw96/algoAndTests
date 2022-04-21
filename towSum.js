function towSum(array, target) {
    // define the object as hash table
    //number that is being checked
    // example target is 10, num is 2, diff is 10-2 = 8,  so now we are looking for 8 in the array
    // another example target is 10, num is 7, diff is 3, so now we are looking for 3 in the array
    // if we passed on number that was equal to diff, we will return the index of the number that was equal to diff
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let diff = target - num;
        if (obj[diff]) {
            return ([obj[diff], i]);
        }
        obj[num] = i;

    }
}
console.log(towSum([1, 3, 8, 6, 3, 4, 5, 2, 7, 8, 10], 10))
module.exports = towSum;