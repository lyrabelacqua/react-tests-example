const add = (a, b) => a + b;

export {add, divide}

const divide = (a,b) =>  { 
    if (b === 0) {
        throw new Error('You cannot divide by zero');
    }
    return a/b } ;
