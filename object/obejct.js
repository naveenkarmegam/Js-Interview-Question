//JS Object

// Js will written by a object world.
//In JavaScript each and everything will be consider object.
// javascript is a simple object based paradigm.
// An Object is a collection of properties, and a property is an association
//between a name and a value.

let ob = {
    name : 'naveen',
    age:25
}

ob.age = 30 // age value will reassign
delete ob.age; // age will be deleted from the ob object
ob['say hi'] = 'naveen' //[] used also access the object or add the property 
ob.log = function (){
    console.log(this.name)
}
console.log(ob)

//add the object property dynamically
const prop = 'firstName';
const firstName = 'naveen'
const dynamic = {
    [prop] : firstName
}
console.log(dynamic.firstName)  //naveen

for(let a in ob){
    console.log(a) //returns key
    // console.log(ob[key]) //returns value
}


//I/O based question:
const fun = (function (a){
    delete a; // delete keyword doesn't delete the local variable. 
    // It will be deleted a object property
    return a;
})(5);

// console.log(fun) //5

//find the output
const ex={
    a:'one',
    b:'two',
    a:'three'
}
console.log(ex) //{a:'three', b:'two'}  // a object which will have same key name it will take last assigned value.


// multipy the value of num object by 2
let num = {
    a:100,
    b:200,
    title:'Multiplay numbers'
}

const mul = (obj) =>{
    for(key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
     console.log(obj)
}
mul(num)


//what is the output of following code

const a = {};
const b = {key:'b'}
const c = {key:'c'}

a[b] = 123; // a['[object object]'] = 123;
a[c] = 456;// a['[object object]'] = 456; 

console.log(a[b]) //456

//stringfy and parse
const string = JSON.stringify(num)
console.log(string)
console.log(typeof string)
console.log(JSON.parse(string))
console.log(typeof JSON.parse(string))

//how to set the obj in the local storage
// object doesn't not store directly in the local storage, so convert object to stringfy
// can we store
localStorage.setItem('text',JSON.stringify(num))

//get the obj form local stoarge
console.log(JSON.parse(localStorage.getItem('text'))) // to convert the string to object

//output of this code
console.log([...'naveen']) //['n','a','v','e','e','n']

console.log(JSON.stringify(num,['a','b'])) // its stringfy the a and b;

//output
const shape = {
    rad:10,
    dia(){
        return this.rad *2;
    },
    peri:()=> 2 * Math.PI * this.rad
}
console.log(shape.peri(),shape.dia()) // NaN, 20


//ouput of this code
const val = {num : 10}

const multiply = (x = {...val}) =>{ //val will be copied each time calling the function without passing any parameter

    console.log((x.num*=2));
}
multiply()  //20 
multiply() //20
multiply(val) //20
multiply(val) //40