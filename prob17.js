function findMin(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin( [10, 22, 3, 14, 25] )); // 3

// method 2
function findMin2(arr){
    return Math.min(...arr);
}
console.log(findMin2( [10, 22, 3, 14, 25] )); // 3

// method 3
function findMin3(arr){
    return arr.reduce((a,b) => Math.min(a,b));
}
console.log(findMin3( [10, 22, 3, 14, 25] )); // 3

// method 4
function findMin4(arr){
    return arr.sort((a,b) => a - b)[0];
}
console.log(findMin4( [10, 22, 3, 14, 25] )); // 3

// method 5
function findMax5(arr){
    return arr.sort((a,b) => b - a)[0];
}
console.log(findMax5( [10, 22, 3, 14, 25] )); // 3