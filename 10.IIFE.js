// IIFE - immediately invoked function expression (IIFE)
// IIFE function expression run as soon as the browser encounters
//It's run immediatley where it is loacated and return the direct output
// after excuting delete the reference in this function

(function(num){
    // return num*num
    // console.log(num*num)
})(5)
// An anonymous function is defined inside the parentheses.
// The entire function is then enclosed in an additional pair of parentheses, (function(){...}), turning it into an expression.
// The final pair of parentheses at the end, () immediately invokes (calls) the function.
var localVar= 1;
(function() {
     localVar = "I am private";
    // console.log(localVar);
  })();
  // localVar is not accessible here
  // console.log(localVar)


  let countFunc = (function(){
    let count = 0;            //this has been called lexical scope or static scope
    const incre = () => {count++}
    const decre = () => {count--}
    const clear = () => {count = 0}
    const print = () => {console.log(count)}
    return{incre,decre,clear,print}
  })();

// console.log(countFunc.count);


(function rec(num){
  num++;
  // console.log(num)
  if(num === 100) return;
  else rec(num)
})(0);

// rec(0) //reference error
//even though the IIFE have any name it can be access in side the scope
// not outside the scope


//   IIFE is commonly used for various purposes, such as:
// Creating a private scope to avoid polluting the global namespace.
// Preserving values of variables by creating a closure.
// Implementing modules or encapsulating code.


// Advantage of IIFE
// 1.Encapsulation:
//IIFE helps encapsulate variables and functions, preventing them from polluting the golobal scope.
//This is particulary useful in situations where you want avoid naming conflicts and keep your code modular.

// 2.Data Privacy
//variables declared inside an IIFE are not acessible from the outside, providing a level of data privacy.
//This can be valuable when you want to create private variables or methods.

// 3. Avoding global pollution:
//By Limiting the scope of variables and funcions to the IIFE, you reduce the risk of unintentionally
//overwriting global varibles, which could lead to bugs and maintence challenges.



// Disadvantages of IIFE:
//1. Readability and Maintainability:
// IIFE can make code less readable, especially for developers who are not familiar with this pattern.
// code that heavily relies on IIFE might be harder to understand and maintain.

//2. hoisting issues:
// variables declared with var inside an IIDE are subject to hositing, which means they are moved to top of 
// the funcition scope. this can lead to unexpected behaviour  if not carefully managed.

// introduction of let, const and block scope in ES6 has reduced the need for IIFE to create private scopes.

const num = (num) => console.log(num*num);
// num(5)


let a = 10;
(function(){
  a =20;
  console.log(a)
})();

console.log(a);
