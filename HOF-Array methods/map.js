//map
//map is a higher order funciton that are available for manipulating an array. 
// map method is iterate for each element of array
// and applying a callback function. However, after iteration it doesn't modify the original
//array , it will be always return a new array.
// a map functuon takes maximum three parameters.

const array = [1,2,3,4]
// syntax:
const newArray = array.map((currentValue, index, array) => {
    // Return the result of applying a function to each element
    // This result will be added to the new array
    return /* transformed value */;
  });
  

//for example squre the array elements:
const sq = array.map(num=>num*num);
console.log(sq)

//excute a funcion for all element of array

const print = (ele,ind)=>console.log(`array[${ind}] = ${ele}`)
// array.map(print)


const pair = [
    {key:1,value:10},
    {key:2,value:20},
    {key:3,value:40},
]


const paired = pair.map(({key,value})=>({[key]: value}) )
console.log(paired)


//take max 3 params
const numbers = [1, 2, 3, 4, 5];
const squaredNumbersWithIndex = numbers.map((num, index, array) => {
  // num is the current element being processed
  // index is the index of the current element
  // array is the array map() was called upon (in this case, 'numbers')

  console.log(`Processing element at index ${index}: ${num}`);
  
  // Return the result of applying a function to each element
  return {
    originalValue: num,
    squaredValue: num * num,
    totalElements: array.length
  };
});

console.log(squaredNumbersWithIndex);



// const fill = array.map(e=>{
//     if(e<3){
//         return e;
//     }
//      return null
// })

// console.log(fill) [ 1, 2, null, null ]
