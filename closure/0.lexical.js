
// Lexical scope is the ability for a function scope to access 
//variables from the parent scope.
// We call the child function to be lexically bound by that of 
//the parent function.


// lexical scope defines how variable name are resolved in nested 
// function.

// a child function have access to the scope form their parent functions

//global scope
var x = 1;

const parentFunc = () =>{

    // local scope
    let val = 2; 

    console.log(x);
    console.log(val)
    console.log('------a-----')
    
    const childFunc = () =>{
  
        console.log(x += 5);
        console.log(val +=5); //lexically bound with outer function scope
        console.log('------b-----')
    }
    childFunc()
 
    console.log(val)
    console.log('-------c----')
}

parentFunc()

console.log(x);


function outerFunction() {
    const outerVar = 'I am from the outer function';
  
    function innerFunction() {
      const innerVar = 'I am from the inner function';
      console.log(outerVar); // Output: I am from the outer function
    }
  
    innerFunction();
  }
  
  outerFunction();


// In this example, outerFunction() contains an inner function called 
// innerFunction(). The variable outerVar is defined inside outerFunction(), 
// and innerVar is defined inside innerFunction(). innerFunction() can 
// access the outerVar variable because it’s defined in the outer function’s 
// lexical scope. However, the outerFunction() cannot access innerVar because 
// it’s defined inside the inner function’s lexical scope.