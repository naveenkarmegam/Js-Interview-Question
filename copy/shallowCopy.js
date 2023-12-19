// What is Shallow Copy?

// Shallow copy is a bit-wise copy of an object.
//  A new object is created that has an exact copy of the values in the
//  original object. If any of the fields of the object are references to
//  other objects, only the reference addresses are copied i.e.,
//  only the memory address is copied.

const arr1 = [1,2,3,4]
const arr2 = [...arr1]
arr2[2] = 50;
console.log(arr1,arr2)
console.log(arr1 === arr2)

// In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), 
// Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) 
// do not create deep copies (instead, they create shallow copies).

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]


// Re-assigning the value of a nested property will be visible in both objects.
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList); //as same as ingredientsListCopy
// 'noodles', { list: [ 'rice flour', 'water' ] } ]


// Re-assigning the value of a top-level property (the 0 index in this case) 
// will only be visible in the changed object
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(ingredientsListCopy);
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]

console.log(ingredientsList);
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]

ingredientsListCopy[1].list.push('yuppie')

console.log(ingredientsList);