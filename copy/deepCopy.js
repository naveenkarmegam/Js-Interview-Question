// What is Deep Copy?
// A deep copy of an object is a copy whose properties do not 
// share the same references (point to the same underlying values)
// as those of the source object from which the copy was made.

// in other words
// A deep copy copies all fields, and makes copies of 
// dynamically allocated memory pointed to by the fields. A deep copy occurs 
// when an object is copied along with the objects to which it refers.


// In JavaScript, standard built-in object-copy operations 
// (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), 
// Object.assign(), and Object.create()) 
// do not create deep copies (instead, they create shallow copies).


const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));


// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]





//using structuredClone method
const mushrooms1 = {
    amanita: ["muscaria", "virosa"],
  };
  
  const mushrooms2 = structuredClone(mushrooms1);
  
  mushrooms2.amanita.push("pantherina");
  mushrooms1.amanita.pop();
  
  console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
  console.log(mushrooms1.amanita); // ["muscaria"]
  
