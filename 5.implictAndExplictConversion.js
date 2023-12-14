//Implicit type conversion
//Implicit type coercion in JavaScript refers to the automatic conversion of values from one data type to another
//by the JavaScript engine, without the programmer explicitly specifying the conversion. 
//This behavior occurs in certain situations, such as when performing operations between values of different types.

//1.String Concatenation:
var num = 42;
var str = "The answer is " + num;  // Implicitly converts num to a string
console.log(str);  // "The answer is 42"

//2.Numeric Operations:
var x = "5";
var y = 10;
var mul = x * y;  // 50 Implicitly converts x to a number
var div = x/y;  // 0.5 Implicitly converts x to a number
var sub = x-y  // -5 Implicitly converts x to a number
// console.log(mul,div,sub);  
// using '+' operator JS take us a concatenation
var add = x + y // 105 here no type conversion

//3.Loose Equality Comparison (==):

var num = 5;
var str = "5";
console.log(num == str);  // true, implicit type coercion


//2.Explict type conversion
//Explicit type coercion in JavaScript involves intentionally converting a value from one data type to
//another using explicit functions or operators.
//Unlike implicit type coercion, where the conversion happens automatically, 
//explicit type coercion requires the programmer to specify and control the conversion process.

// 1.String Conversion:
var num = 42;
var str = String(num);  // Using String() function
console.log(str);  // "42"

var bool = true;
var strBool = bool.toString();  // Using .toString() method
console.log(strBool);  // "true"


// 2.Numeric Conversion:
var strNum = "123";
var num = Number(strNum);  // Using Number() function
console.log(num);  // 123

var floatStr = "3.14";
var floatNum = parseFloat(floatStr);  // Using parseFloat()
console.log(floatNum);  // 3.14


//3.Boolean Conversion:
var value = "Hello";
var boolValue = Boolean(value);  // Using Boolean() function
console.log(boolValue);  // true

//4.String Concatenation:
var num = 42;
var str = "The answer is " + num.toString();  // Using + operator
console.log(str);  // "The answer is 42"



