// Difference between var and let keyword in javascript.

console.log('heelo')
function example() {
    if (true) {
        var x = 100; // function-scoped
        let y = 20; // block-scoped
    }

    // console.log(x); // 10
    // console.log(y); // ReferenceError: y is not defined
}
// example()
// console.log(x) //ReferenceError: x is not defined

var a = 1;
let b = 2;
 const c =3;

// console.log(foo()) // 
// console.log(fooo)
// console.log(fo)
 function foo() {
    return a+b+c
 }

const fooo = function () {
    return a+b+c
}
const fo = ()=> a+b+c

//  console.log(foo())
//  console.log(a,b)
// console.log(a)
if(true){
    var a = 1;
    let b = 2;
     const c =3;
}

// console.log(b)


// Global Scope:

// Variables declared outside of any function or block have global scope.
// They can be accessed from any part of the code, including functions and blocks.
// Variables declared with var in the global scope become properties of the global object (window in browsers).
var globalVar = "I am global";  // Global scope

function example() {
  console.log(globalVar);  // Accessible within functions
}

console.log(globalVar);  // Accessible outside functions


// Local (Function) Scope:

// Variables declared inside a function have local scope.
// They can only be accessed within the function where they are defined.
// Variables declared with var are function-scoped, while variables declared with let and const are block-scoped (including loops and conditional statements).

function example() {
    var localVar = "I am local";  // Function-scoped
  
    console.log(localVar);  // Accessible within the function
  }
  
//   console.log(localVar);  // ReferenceError: localVar is not defined
  