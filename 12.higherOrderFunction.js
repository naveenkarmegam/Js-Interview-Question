//higher order function
// In JavaScript, higher-order functions are functions that can take other functions 
// as arguments or return functions as their results.
// Higher-order functions are a powerful concept, and they are commonly used in functional programming languages.

function random(){
    return ~~(Math.random()*100)
}

function binder(name,rand) {
    return `${name}-${rand()}`      //higher order function return the function
}

const userId = binder('naveen',random);

// console.log(userId)


//Accepting Functions as Arguments:
function operation(fun,a,b){
    return fun(a,b)
}

function add(x,y){
    return x+y;
}
function mul(x,y) {
    return x*y;
}

// console.log(operation(add,5,5))
// console.log(operation(mul,5,5))


//Returning Functions:
// Higher-order functions can also return functions. 
function math(factor){
    return function (x) {
        return factor*x;
    }
}
const factor = math(2);
// console.log(factor(4))

//Functions as Values:
function sqr(x){
    return Math.pow(x,2)
}
const sqrt = Math.sqrt;
function cube(x){
    return Math.pow(x,3)
}

const cal = [sqr,cube,sqrt]

// console.log(cal[0](2))
// console.log(cal[1](3))
// console.log(cal[2](4))


// Functional Composition:
// Function Composition is a technique in which you combine two or more functions to produce a new function.
function compose(fun1,fun2){
    return function(x) {
        return fun1(fun2(x))
    }
}

function dob(x) {
    return x*2;
}

function square(x) {
    return x*x
}

const calling = compose(dob,square)

console.log(calling(2))


// Built-in Higher-Order Functions:

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function (x) {
  return x * x;
});

console.log(squared);  // [1, 4, 9, 16, 25]
