// If you want to work with a string as an array, you can convert it to an array.
//A string can be converted to an array with the split() method

let x = "Having fun with JavaScript?"
let y = x.split(" "); //split() method splits a string into an array of substrings

console.log(y);
console.log(y[1]);

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);
console.log(myArray[0]);