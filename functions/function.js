// function are first class object

// what is function declaration

//normal function or named function(hoisted)
function sq(num){  //so this is the function satement or function declartion
    // something else
    return num * num
}


// what is function expression
// whenever a function declaration can be assigned in a 
// variable , it will be called function expression

const fun = function (){    // annonymous function a function which will be decalred in with out name.

}

//what are the first call function?
// when a function treated as a variable called first class function

function getVal (fn){ //powerfull function
    return fn(5);   //calling a sq function 
}
//call back function
// a function takes parameter as anthoer function and calling the function is called call back function

console.log(getVal(sq))

//arrow function
const get = num => console.log(num) 

//arrow function vs regular function
// syntax 
    //1. a normal function must have a function keyword
    //2. a arrow function does not have function keyword, have a arrow operator

//implict return keyword
    //1. in regular function the return keyword will be must to return the value
    //2. in arrow function define in a single line no need to mention the return keyword.

//arguments keyword
    //1.in a normal function the arguments key word accpet the value of the caller
    function args(){
        console.log(arguments)  //[Arguments] { '0': 1, '1': 2, '2': 4 }
    }
    // args(1,2,4)
    // 2.in arrow function doesn't allow the argument keyword
    const argsArrow = () => {
       console.log(arguments)   //reference error- arguments not defined
    }
    // argsArrow(1,2,3) 

//this keyword
//1. regurlar function bind with this keyword
//2. arrow function doesn't bind to this keyword

let user ={
    name: "naveen",
    call1:()=>{
        console.log(this.name)  //undefined- because it refer the global
    },
    call2(){
        console.log(`hey this is ${this.name}`)  // hey this is naveen - this will be refer this name from this obeject
        console.log()
    }
}
user.call1()
user.call2()


//parameters vs arguments

function n(num){    //parameters
    //a function received a value from the caller as refer parameter
    console.log(num)
}
n(5) //arguments 
//during the function invoking passing the value to the function will refer as arguments


function dot(...num){ // a spreate operator used as function parameter in the rest condition is called rest parameter or operator

    console.log(num)
}
var a = [5,6]
dot(...a) //spread operator 


function param(a,b,c,...d){
    console.log(d)
}

param(1,2,3,4,5,6,7,8)