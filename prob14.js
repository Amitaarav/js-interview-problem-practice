function countVowels(str){
    return str.match(/[aeiou]/gi).length;
}
console.log(countVowels("helloo world")); // 2

// method 2
function countVowels2(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[aeiou]/gi)){
            count++;
        }
    }
    return count;
}
console.log(countVowels2("helloo world")); // 2
// method 3
function countVowels3(str){
    let count = 0;
    let vowels = "aeiou";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels3("helloo world")); // 2

// method 4
function countVowels4(str){
    let count = 0;
    let vowels = "aeiou";
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            count++;
        }
    }
    return count;
}
console.log(countVowels4("helloo world")); // 2

// 



