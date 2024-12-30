
// chaining methods
// write a code to convert a string to camelcase and snake case

function toCamelCase(str) {
    return str.trim().split(" ")[0].toUpperCase().join(" ")
}

var str = "hello world of learning javascript"
console.log(toCamelCase(str))

console.log("hello world of learning javascript")
