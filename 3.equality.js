// Difference between “ == “ and “ === “ operators.


// In JavaScript, both the "==" (equality) and "===" (strict equality) operators are used for comparison, 
// but they behave differently in terms of type coercion.

//1. '==' equality
// the equality test the value of variables

//2. '===' strictly equality
// the equality test value and datatype of variables

console.log(1=='1') // true  //bcz value only compare
console.log(1==='1') // false // value and data type will be compare



console.log('a'=='a') // true
console.log('a'==='a') // true

console.log(0 == false) // true // bcz both are falsy satement in JS
console.log(0 === false) //false // a number 0 is number data type and fase is boolean data type

console.log(null == undefined) // true // bcz both are falsy satement in JS
console.log(null === undefined) // false // null is a obejct, undefined is undefined
console.log(typeof undefined)


console.log(5==Number(5)) // true
console.log(5===Number(5)) // true
console.log(5===new Number(5)) // false
console.log(typeof 5,typeof Number(5),typeof new Number(5))


console.log('naveen' == String('naveen')) //true
console.log('naveen' === String('naveen')) //true
console.log('naveen' === new String('naveen')) //false