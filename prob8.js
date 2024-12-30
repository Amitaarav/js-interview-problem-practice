// Find factorial of a number
const readline = require('readline');
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
// Find the sum of all the multiples of 3 or 5 below 1000   

var num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

num.question('Enter a number: ',(input)=>{
    const number = parseInt(input);
    function sumMultiples(num) {
        let i = 0;
        for (i = 0; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                return i;
            }
        }
        return i;
    }
    console.log(`The sum of multiples of 3 or 5 below ${number} is: ${sumMultiples(number)}`);
    num.close();
});


// Find the sum of all the primes below 2000