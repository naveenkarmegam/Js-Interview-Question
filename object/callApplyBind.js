//call, apply, bind - explicit binding

var obj = {
    name: 'naveen'
}

function sayHello (age) {
    return `Hello ${this.name} is ${age}`
}
//call
// console.log(sayHello.call(obj,25)) // passing the list of arguments

//apply
// console.log(sayHello.apply(obj,[24]))

//bind
const bindFunc = sayHello.bind(obj)
// console.log(bindFunc(24))

//output based questions

const age = 10;

var person = {
    name:'naveen',
    age:20,
    getAge: function() {
        return this.age;
    }
}
var person2 = {
    age :24
}
// console.log(person.getAge.call(person2)) // call the person object getAge method with person2 reference


//example


var sts = "😎";

setTimeout(()=>{
    const sts = "😍";

    const data = {
        sts : '😁',
        getSts(){
            return this.sts;
        }
    };

    // console.log(data.getSts()); //😁
    // console.log(data.getSts.call(this)) //😎 it will access the global sts
},0);



//call print animals such that it prinst all animal in object

const animals = [
    {species:'Lion',name:'King'},
    {species:'Whale',name:'Queen'},
]


function printAnimals(param) {
    this.print = function () {
        console.log(`#${param} ${this.species} ${this.name}`)
    }
    this.print();
}
for(let i = 0 ; i <animals.length; i++) {
    // printAnimals.call(animals[i],i)
}
// #0 Lion King
// #1 Whale Queen


//append an array to anthoer array

const arr = [1,2,3,4]
const arr2 = [5,6,7,8]
arr.push.apply(arr,arr2)
// console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8]

//find max valye of number
const num = [1,2,4,5,6]

// console.log(Math.max.apply(null,num))
// console.log(Math.max(...num))


//bound function
// a function which will be bound with bind method it can't be re -bound
function fill() {
    console.log(this)
}

let u = {
    g:fill.bind(null)
}
// user.g() //window object // because fill define globally outside the u

//Bind Chaining

function nam(params) {
    console.log(this.name)
}

nam = nam.bind({name:'Naveen'}).bind({name:'Karmegam'})

nam()

//check password 
function checkPassword(success,failed){
    let password = prompt('Please enter the password','');
    if(password == 'naveen') success();
    else failed();
}


let caller = {
    name : 'naveen',
    loginSuccess() {
        console.log(`${this.name} logged in`)
    },
    loginFailed(){
        console.log(`${this.name} failed to login`);
    }
}

// checkPassword(caller.loginSuccess.bind(caller),caller.loginFailed.bind(caller))

function checkPassword2(success,failed){
    let password = prompt('Please enter the password','');
    if(password == 'naveen') success();
    else failed();
}


let caller2 = {
    name : 'naveen',
    loginSuccess(result) {
        console.log(`${this.name} ${result?'login-sucessful':'login-failed'}`)
    }
}

// checkPassword2(caller2.loginSuccess.bind(caller2,true),caller2.loginSuccess.bind(caller2,false))

//polyfill for call method

let car1 = {
    color :'red',
    company:'ferrari'
};

function purchase(currency,price) {
    console.log(
        `I have Purchase ${this.color}-${this.company} car for ${currency}${price}`
    )
}

// purchase.call(car1,"$",50000) //I have Purchase red-ferrari car for $50000

//created own polyfill for call

Function.prototype.myCall = function (contex = {},...args) {
    if(typeof this !== 'function'){
        throw new Error (this + "It's no callable")
    }
    
    contex.fn = this;
    contex.fn(...args)
}
// purchase.myCall(car1,"$",50000) //I have Purchase red-ferrari car for $50000

Function.prototype.myApply = function (contex = {},args = []) {
    if(typeof this !== 'function'){
        throw new Error (this + "It's no callable")
    }
    if(!Array.isArray(args)) {
        throw new TypeError ('CreateListFromArrayLike called on non-object ')
    }
    
    contex.fn = this;
    contex.fn(...args)
}
// purchase.myApply(car1,["$",50000]) //I have Purchase red-ferrari car for $50000


Function.prototype.myBind = function (contex = {},...args) {
    if(typeof this !== 'function'){
        throw new Error (this + "cannot be bound as it's not callable")
    }
   
    
    contex.fn = this;
    return function(...newArgs) {
        return contex.fn(...args,...newArgs)
    }
}

const newBind = purchase.myBind(car1)
newBind("$",50000)