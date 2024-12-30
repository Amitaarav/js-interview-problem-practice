
function removeDuplicates(arr) {
    return [...new Set(arr)]; //...spread operator
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10]));

// method 2
function removeDuplicates2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates2([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10]));