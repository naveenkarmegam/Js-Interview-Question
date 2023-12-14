// Explain passed by value and passed by reference.

//copy by value
//It is applicable for both primitive and complex data type. here a variable assign the own value or
//copy the value to another variable, when we asign it
var a = 5
var b = a;
console.log(a, b) //5,5 
// the value of a is assigned to b so its copied

//Passed by Value:
// The actual value of the variable is passed to the function.
// The function receives a copy of the value, and any modifications to the parameter inside the function do not affect the original variable outside the function.
// Primitive data types (like numbers, strings, booleans) are usually passed by value.

function modifyValue(val) {
    val = 42;
}
let originalValue = 10;
modifyValue(originalValue);
console.log(originalValue);  // Output: 10 (unchanged)


//copy by reference
//It is appilcable for only complex data type
//A single array/Object have multiple reference
var res = [10, 20]
var res = [30, 40]
var arr = res;
res[0] = 50;
console.log(res) //[50,20]

let flat = [1, 23, [1, 2]]
flat = [10, [3, 4], [4]]
let flat2 = flat
flat[2] = [5, 5, 5]
console.log(flat, flat2)

//pass by reference
// Instead of the value itself, a reference (memory address) to the variable is passed to the function.
// The function operates on the same object or variable in memory, and any changes to the parameter 
// inside the function affect the original variable outside the function.
// Complex data types (like objects and arrays) are often passed by reference.

function modifyArray(arr) {
    arr.push(4);
}

let originalArray = [1, 2, 3];
modifyArray(originalArray);
console.log(originalArray);  // Output: [1, 2, 3, 4] (modified)
