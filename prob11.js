const sumOfDigits = (num) => {
    return num
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reduce((a, b) => a + b);
}
console.log(sumOfDigits(123)); // 6


const sumOfDigits2 = (num) => {
    return num
    .toString()
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
}
console.log(sumOfDigits2(123)); // 6

const sumOfDigits3 = (num) => {
    let arr = Array.from(num.toString());
    return arr.reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(sumOfDigits3(123)); // 6

const sumOfDigits4 = (num) => {
    let arr = Array.from(String(num),Number);//
    console.log(arr);
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfDigits4(123)); // 6