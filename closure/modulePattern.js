// what is module pattern

// The Module Pattern is a design pattern used in JavaScript to encapsulate and 
// organize code by creating private and public scopes within a module. 
// It helps to achieve modularity, encapsulation, and maintainability in your code. 
// This pattern allows you to create private and public 
// methods and variables, preventing them from polluting the global namespace.

var MyModule = (function () {
  // Private variables and functions
  var privateVariable = "I am private";

  function privateFunction() {
    console.log("This is a private function");
  }

  // Public interface
  return {
    // Public variables
    publicVariable: "I am public",

    // Public function
    publicFunction: function () {
      console.log("This is a public function");
      // Accessing private members within the module
      console.log(privateVariable);
      privateFunction();
    },
  };
})();

// Accessing public members outside the module
console.log(MyModule.publicVariable); // Output: I am public
MyModule.publicFunction(); // Output: This is a public function, I am private, This is a private function

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
// but the private method doesn't allow the call ,
