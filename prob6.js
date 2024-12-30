// palindrome
function palindrome(str) {
    let str1 = str.toLowerCase(); 
    let strArr = str1.split("")
    console.log(strArr)
    let reversedArr = strArr.reverse()
    let reversedStr = reversedArr.join("")
    if (str === reversedStr) {
        return true
    } else {
        return false
    }       
}

console.log(palindrome("racnecar hello world"))

// reverse a string
function reverseString(str) {
    let strArr = str.split("")
    let reverseArr = strArr.reverse()
    let reverseStr = reverseArr.join("")
    return reverseStr
}