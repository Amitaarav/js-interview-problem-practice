
function findMax(arr) {
    // let max = arr[0]
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    // }
    // return max

    //use map
    //return arr.map((num) => num).sort((a, b) => b - a)[0];

    //use filter
    // return arr.filter((num) => num === Math.max(...arr))[0]

    //use reduce
    return arr.reduce((a, b) => Math.max(a, b))

}

console.log(findMax([1,5,3,9,2]))
console.log(findMax([-10,-4,-5,-3,-9]))
console.log(findMax([5]))

const number = [4,9,16,25,36,49,64,81,100]
const suareRoot = number.map(Math.sqrt)
console.log("squre-root: "+suareRoot)

//modify the elements of the array

function modifyArray(num) {
    return num*10
}
const modifiedArray = number.map(modifyArray)
console.log(modifiedArray)

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
  const fullName = persons.map(getFullName);
  console.log("full name : "+fullName)
  /**
   * Array Tutorials:
Array Tutorial

Array Const

Basic Array Methods

Array Search Methods

Array Sort Methods

Array Iteration Methods
   */

//read a line priveded by user as input

const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter your name: ", function (inp) {
//     console.log("Hello " + inp);
//     rl.close();
// });


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("Enter a number: ", function (num1) {
  r1.question("Enter another number: ", function (num2) {
      const sum = parseInt(num1) + parseInt(num2);
      console.log("The sum is: " + sum);
      r1.close();
  });
});



const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r2.question("Enter your name: ", function (name) {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        console.log("Good morning, " + name + "!");
    } else if (currentHour < 18) {
        console.log("Good afternoon, " + name + "!");
    } else {
        console.log("Good evening, " + name + "!");
    }
    r2.close();
});
