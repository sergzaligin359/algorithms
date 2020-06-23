// !5 = 5 * 4 * 3 * 2 * 1; 
const factorial = x => {
    if(x === 1) return 1;

    return x * factorial(x - 1);  
};

console.log('Stack: ', factorial(5));