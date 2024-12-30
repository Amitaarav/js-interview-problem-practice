/**
 * By default, the replace() method replaces only the first match
 * 
 * The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match
 */

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
/**
 * By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
 * 
 * To replace case insensitive, use a regular expression with an /i flag (insensitive):
 */

let text1 = "Please visit Microsoft and Microsoft!";
let newText1 = text1.replace(/MICROSOFT/i,"W3Schools") //Regular expressions are written without quotes.
console.log(newText1)

/**
 * To replace all matches, use a regular expression with a /g flag (global match):
 */
let newText2 = text1.replace(/Microsoft/g,"W3Schools");
console.log(newText2)

// In 2021, JavaScript introduced the string method replaceAll():
let newText3 = text1.replaceAll("Microsoft","W3Schools");

//replaceAll() does not work in Internet Explorer.