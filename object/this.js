// this keyword in JS Implict Binding

//this keyword refers global object at the top level
// console.log(this)
this.a = 5;
// console.log(this.a) //5
function get() {
    console.log(this.a) //5
}
// get()

const arrow = () => console.log(this.a) // 5
// arrow() // in this case a arrow function refers a global value

// let name  = 'naveen'

let example = {
    firstName:'naveen',
    age : 35,

    // in regular functiom
    sayHi() {
        console.log('Hey' + this.firstName) // in this case the this key word targeting the this particular obejct, not window object
        // console.log(this)
    },
    //in nested
    child:{
        lastName:'karmegam',
        getDetails(){
            console.log(this.firstName +" " + this.lastName) // undefined karmegam
            // this will be always refer a this object not a parent obejct
            
        }
    },

    // in arrow function this keyword always refer a global object or parent object
    sayBye:()=> {
        console.log(this.firstName) // not show 
        console.log(this) //target the window object
        // because in global obejct(parent) firstName is not there
        
    },
    child2 : {
        greetings:()=>{
            console.log(this.age)   // undefined
        }
    },


    getGreetings() {
        //nested arrow function
        const a  = () => console.log(this.firstName) // naveen // nested refers a normal fucntion of parent
        a()
    }

}

// example.sayHi()
// example.child.getDetails()
// example.sayBye()
// example.child2.greetings()
// example.getGreetings()


// this key in class constructor

class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
    console.log(this.name)
    }
}

const user1  = new User('naveen')

// user1.getName(); // naveen


//output based questions:

const user = {
    firstName : 'Naveen',
    getName() {
        const firstName = 'Karmegam';
        return this.firstName;
        // this will depends the user obejct not the function
    }
}

// console.log(user.getName()) // Naveen

//example
var length = 4; //while using let and const
function callback () {
    console.log(this)
}

let object = {
    length : 5,
    method(fn){
        fn()
    }
}

object.method(callback) //4 because the  callback will be decalred globally



//what is the result of acessing its ref? why?

function makeUser1() {
    return {
        name : 'Jhon',
        ref:this,
    }
}

let call1 = makeUser1()
// console.log(call1.ref.name)  // nothing to show makeUser parent is window Object in window object name dosen't not define

function makeUser2() {
    return {
        name : 'Jhon',
        ref() {
            return this
        }
    }
}

let call2 = makeUser2()
// console.log(call2.ref().name) // John this will be return the total obejct 


//another exmple create an obejct calculator

let calculator = {
    read(){
        this.a = +prompt('a =',0)
        this.b = +prompt('b =',0)
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
}
// calculator.read();
// console.log(calculator.sum())
// console.log(calculator.mul())
