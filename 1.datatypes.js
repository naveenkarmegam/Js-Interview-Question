//1. What are the different data types present in javascript?
//JavaScript is a dynamically typed language, which means that variables can hold values of 
//any data type without explicitly specifying the data type. However, JavaScript has several 
//built-in data types, which can be broadly categorized into two main groups: 
//primitive data types and non-primitive or complex.

//1. primitive data types
//a. Number => represent a numbermic values wheather it is interger or floating value
let num = 42;        // integer
let floatNum = 3.14;  // floating-point number
let numObj = new Number(5) // number obejct

//b. String=> a group of character represent in a single or doubles quotes which means string
let str = 'naveen'
let strNum = '1234'
let strObj = new String('a')
// console.log(typeof strObj)

//c.Boolean => represnt a logical entity can hold only two values wheather it is true or false
let isTrue = true;
let isFalse = false;

//d.undefined=> represent a variable will be declared but not has been assigned a valued
let undefined;

//e.null => represent a intensional abesence of any object value
let nullVal = null; // null is type of object

//f.symbol => represent a unique identifier. symbol are often used as key in objects to aviod naming conflicts
let sym = Symbol('naveen')
// console.log(typeof sym)

//g.BigInt => integers beynod with limits of number
let bigIntValue = 9007199254740991n;  // Note the 'n' at the end
let anotherBigInt = BigInt("1234567890123456789012345678901234567890");
// console.log(typeof bigIntValue,typeof anotherBigInt)



//2.non-primitive data types

//a.objects =>JavaScript is designed on a simple object-based paradigm. 
// An object is a composite data type that allows you to store and organize data efficiently. 
///Unlike primitive data types, objects can hold collections of data as key-value pairs.

let object = {
    name: 'naveen',
    age: 24,
    student: true,
    salary: null,
    sayHi: () => {
        console.log('hai!! Naveen')
    }
}


//b.Array => a collection of heterogenous data typees 
//array is type of object in javascript

let array = [1, 2, true, 'naveen']


//d.function => a reusable block of code that can be defined and invoked
function add(a, b) { // funciton defined
    return a + b;
}

add(1, 2) // invoked

//e.date=> represent date and times
let currentDate = new Date();

//f. regular expression =>  represent a regular expression for pattern matching

let regex = /[a-zA-Z]/;


