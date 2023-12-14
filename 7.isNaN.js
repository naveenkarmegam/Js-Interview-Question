// The NaN global property is a value representing Not-A-Number.
// In other words, it is a variable in global scope.
// NaN stands for "Not a Number" in JavaScript, and it is a special value representing an undefined or
//  unrepresentable mathematical value. In JavaScript, 
// NaN is of the number data type, but it is a numeric value that cannot be represented as a real number.

typeof NaN // is number but not a legal number
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

isNaN("hello world"); // true
Number.isNaN("hello world"); // false
console.log(Number.isNaN(5))// false
console.log(Number.isNaN(NaN)) // true

// Failed number conversion always return NaN
parseInt("blabla")
Number(undefined)
Math.abs(undefined)

// Math operation where the result is not a real number
Math.sqrt(-1) // below zero or not a natural number
