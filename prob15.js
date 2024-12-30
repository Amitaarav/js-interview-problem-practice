function isPowerOfTwo(num){
    if(num <= 0) return false;
    while(num % 2 === 0){
        num = num / 2;
        if(num === 1) return true;
    }
    return false;
    }


console.log(isPowerOfTwo(7));

// method 2
function isPowerOfTwo2(num){
    
}