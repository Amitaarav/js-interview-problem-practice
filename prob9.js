// input number of data and output is  single value ---> use reduce

// Syntax of reduce():
//array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

function findSum(arr) {
    return arr.reduce((acc , curr)=>{
        return acc + curr
    })
}
const a = [2, 4, 6];
console.log(findSum(a));

function findMax(arr) {
    return arr.reduce((acc , curr)=>{
        return acc > curr ? acc : curr
    })
}
const b = [2, 4, 6];
console.log(findMax(b));

function findMin(arr) {
    return arr.reduce((acc , curr)=>{
        return acc < curr ? acc : curr
    })
}
const c = [2, 4, 6];
console.log(findMin(c));

function calculateAverage(arr) {
    return arr.reduce((acc , curr)=>{
        return acc + curr
    }) / arr.length
}
const d = [2, 4, 6];
console.log(calculateAverage(d));

//Can reduce() be used to flatten an array?
// Yes, reduce() can be used to flatten an array by concatenating nested arrays into a single array using the accumulator.

function flattenArray(arr) {
    return arr.reduce((acc , curr)=>{
        return acc.concat(curr)
    })
}
const e = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(flattenArray(e));
/**
 * Is reduce() the same as forEach()?
No, reduce() accumulates values to produce a single result, while forEach() simply iterates over array elements without returning a value.
 */

/**
 * Can reduce() be used to group array elements?
Yes, reduce() can group array elements into categories by accumulating elements into an object based on a specified condition.
 */

function findLongestWord(str) {
    const words = str.split(' ');
    console.log(words);
    return words.reduce((acc , curr)=>{
        return acc.length > curr.length ? acc : curr
    })
}
console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));