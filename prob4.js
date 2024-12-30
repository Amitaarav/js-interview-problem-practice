// write a function called checkTriangleType that takes three parameters represcenting the lengths of the sides of a triangle. The function should return one of the following strings depending on the triangle's type:

// "equilateral" if all three sides are equal in length
// "isosceles" if two sides are equal in length
// "scalene" if all three sides are of different lengths

function checkTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

// Example usage:
console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(3, 4, 5)); // Output: "scalene"

