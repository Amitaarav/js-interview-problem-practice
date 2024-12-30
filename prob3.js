
// Write a function called countChar that takes two arguments: (1) the first argument is a string which will be analyzed to count the number of occurrences of the second argument.

// constraint: the second argument is a single character.
// the function should handle both lowercase and uppercase letters.
// the function should return the number of occurrences of the character in the string.

function countChar(str, char) {
    // let count = 0;
    // // iterate throght the string
    // for(let i = 0; i < str.length; i++) {
    //     // check if the current character is equal to the character we are looking for
    //     if(str[i].toLowerCase() === char.toLowerCase()) {
    //         // if it is, increment the count
    //         count++
    //     }
    // }
    // return count;

    // method 2
    totalCount = str.toLowerCase().split("").reduce((acc, curr) =>{
        if(curr === char.toLowerCase()) {
            acc++
        }
        return acc
    },0)
    return totalCount;
}

const countCr = countChar("MissIssippi","I");
console.log(countCr);


// REDUCE METHOD 
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15