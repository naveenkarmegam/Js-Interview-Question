// curring

// curring take a fucnction that receives more than on parameter
// and breaks it into a series of unary (one parameter) functions.



function f(a){
    return function (b) {
        return `${a} ${b}`
    }
}

console.log(f(5)(6));


const mul = x => y => x*y;
console.log(mul(2)(3))


function sum(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3))