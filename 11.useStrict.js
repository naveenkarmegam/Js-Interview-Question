'use strict';
//strict mode is a feature in a JS was introduced in ES5.
//when you enable the strict mode the JS interpreter enforces
//to follow strictly and error handling. Even it will we helping 
//developers to catch the common coding mistake
//this mode apply for the entire script or to individual function

//examples

//1.Variable Assignment without Declaration is Forbidden:
x= 10
console.log(x)  //reference error 


//2.Duplicate Parameter Names are Not Allowed:
function duplicateParams(x, x) {} // SyntaxError: Duplicate parameter name not allowed in this context


//3.Assignment to Read-Only Properties Throws an Error:
Math.PI = 3.14; // TypeError: Cannot assign to read-only property 'PI' of object '#<Object>'



// this in Functions Refers to undefined in Strict Mode:
function example() {
  console.log(this); // undefined
}
