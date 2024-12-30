
function sumOfSquare(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    return sum;
}
console.log("sum of square : ", sumOfSquare([1,3,5,4,2]));

//method 2
function sumOfSquare2(arr) {
    return arr.reduce((acc, res)=>acc + res**2,0);
}
console.log("sum of square : ", sumOfSquare2([1,3,5,4,2]));
