const arraysAreEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const a = [1, 2, 3];
const b = [1, 2, 4];
console.log(arraysAreEqual(a,b)); // true
const arraysAreEqual2 = (a, b) => a.every((value, index) => value === b[index]);
console.log(arraysAreEqual2([1, 2, 3], [1, 2, 3])); // true

const arraysAreEqual3 = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);