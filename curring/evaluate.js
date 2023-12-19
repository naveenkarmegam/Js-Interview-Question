function evaluate(operation) {
    return function(a){
        return function(b) {
            if(operation === 'sum')  return a+b;
            else if(operation === 'multiply') return a*b;
            else if(operation === 'divide') return a/b;
            else if(operation === 'subtract') return a-b;
            else `invalid operator`
        }
    }
}

console.log(evaluate('sum')(1)(2))
console.log(evaluate('multiply')(1)(2))
console.log(evaluate('divide')(1)(1))
console.log(evaluate('subtract')(1)(2))


// infinite currying

//recursion
function sum(a){
    return function(b){
        if(b) return  sum(a+b);
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)())

// explanation
//sum(1)(2) //while 1st calling return 3
//sum(3)(3) //second calling return 6
//sum(6)(4) //third calling return 10
// sum(10)(5)  //fourth calling return 15
//sum(15)() // a final calling return if b is false so i will be print 15


function curry (func){
    return function innerCurrying(...args){
         if(args.length >= func.length){
            return func(...args)
         }
         else {
            return function(...next){
                return innerCurrying(...args,...next)
            }
         }
    }
}

const curry2 = fn => {
    return curried = (...args) => {
        if(fn.length !== args.length)
            return curried.bind(null,...args);
        return fn(...args)
    }
}

function add(a,b,c,d){
    return a+b+c+d;
}

// const totalSum = curry(add);
// const totalSum = curry2(add);
console.log(totalSum(1)(2)(3)(40))