// Hash tag generator
// You are required to implement a function generateHashtag which takes a string and returns a hash tag (if it is valid).

// The input string should be converted into a hash tag by following these rules:
// where each word in the string is capitalized and concatenated with a space. The first word should not have a space before it.
// If the length of string is greater than 289 characters,or input string is empty or contains only white space, the function should return false
// otherwise the function should return the generated hash tag prefixed with #
const generateHashtag = (str) => {
    if (str.length > 289 || str.trim() === "" || str === " ") {
        return false;
    }
    let wordsArr = str.split(" ");
    // // iterate over the words array and capitalize the first letter of each word
    // for (let i = 0; i < wordsArr.length; i++) {
    //     wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
    // }
    // // join the words array with a space
    // let hashtag = wordsArr.join("");
    // // add a # at the beginning of the hashtag
    // hashtag = "#" + hashtag;
    // return hashtag;

    // method 2
    // word is elements of wordsArr which will be transformed to uppercase and joined with a space
    return "#" + wordsArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("")
}
console.log(generateHashtag("my name is amit kumar gupta")); // #MyNameIsAmitKumarGupta
console.log("#################################################3")
const array1 = [1, 2, 3, 4, 5];
// extract the first element of the array
const firstElement = array1.shift();
console.log("fistElement: ",firstElement); // 1

// extract the last element of the array
const lastElement = array1.pop();
console.log("lastElement:",lastElement); // 5

const array = [1, 2, 3, 4, 5];
console.log("original Array: ",array); // [1, 2, 3, 4, 5]
const sliceArray = array.slice(1, 3);
console.log("slicedArray: ",sliceArray); // [2, 3]
console.log("original Array: ",array); // [1, 4]

const slicedToEnd = array.slice(1);
console.log("slicedArray to end: ",slicedToEnd); // [2, 3, 4]
console.log( "original Array: ",array); // [1, 2, 3, 4]

const removed = array.splice(1, 2);
console.log("Removed Array: ",removed); // [2, 3]
console.log("Remaining Array: ",array); // [1, 4]

