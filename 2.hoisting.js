//Explain Hoisting in javascript.

// hositing is a behavior of js where a varibale or function declarations are moved to the 
// top of the containing scope during the compilation

// this means you can use varible or function before declared.
// however, it's important to note that only the declarations not a initializations

// two main aspect of hositings
//1.variable hositing
console.log(x); // undefined
x = 5;
var x ;
console.log(x); // 5

//Even though console.log(x) appears before the variable x is declared, it doesn't result in an error.
//During hoisting, the declaration var x; is moved to the top of the scope, and the variable is initialized with undefined.
//That's why the first console.log(x) outputs undefined.


// Example with let
// console.log(y); // ReferenceError: y is not defined
let y = 10;

// Example with const
// console.log(z); // ReferenceError: z is not defined
const z = 15;

//Variable hoisting applies to variables declared with var, but not to variables declared with let or const (introduced in ES6).
// Variables declared with let and const are hoisted as well, but they are not initialized until the actual 
// declaration statement is encountered in the code. 
// This is known as the "temporal dead zone."



//2.function hositing

sayHello(); // "Hello, World!"
function sayHello() { //named fucntions
  console.log("Hello, World!");
}
//Similarly, function declarations are also hoisted to the top of their scope. 
//This allows you to call a function before its actual declaration in the code.


// Function expression
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
//Function expressions, however, are not hoisted in the same way as function declarations.

// 3.Variable and Function Hoisting

function example() {
  console.log(a); // undefined
  var a = 3;
  console.log(a); // 3
}
example();

// console.log(a) // reference error