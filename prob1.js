// write a function findLongestWord that takes a string as input and returns the longest word in the string.
//If there are multiple words of the same length, return the first one encountered.


function findLongestWord(str) {
    // split the string into an array of words
    let words = str.split(' ');
    // initialize variables to keep track of the longest word and its length
    console.log(words) //got the array of words in str string
    // let longestWord = '';
    // let longestLength = 0;
    // // loop through the array of words
    // for (let i = 0; i < words.length; i++) {
    //   // if the current word is longer than the longest word found so far, update the longest word and its length
    //     if(words[i].length > longestLength ){
    //         longestWord = words[i];
    //         longestLength  = words[i].length;
    //     }
    // }
    // return {longestWord,longestLength};
    // words = words.sort(); // sort based on unicode values // ascending order 
    // capital letters come before lowercase letters

    words  = words.sort((a,b)=>b.length - a.length); // sort based on length of words
    console.log(words);

    // console.log(words.at(-1)); // return the last element in the array

    //return words[0]; // return the first element in the array

    console.log (words.reduce((a,b)=>a.length > b.length ? a : b))
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));