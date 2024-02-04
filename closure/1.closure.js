// difference b/w closure nd scope

// closure
// A closure is a function having access to the parent scope, even after the parent
// function has closed.

//the ability of the function to access variable and functions that are lexically out of its scope are called also closure
// A closure is created when we define a functon, not when a fucntion is excuted.

// whenever create function inside anthoer function, the inner function is 
// is closure , this closure will return outer function function variable.

//A closure is the combination of a 
//function bundled together (enclosed) 
//with references to its surrounding state 
//(the lexical environment). 
//In other words, a closure gives you 
//access to an outer function's scope from
//an inner function.

function outer(name){
    return function(){
        let str = 'Hey this is '
        console.log(str+name)
    }
}

const firstCall = outer('Naveen');
firstCall()

var x = 1;

const parentFunc = () =>{

    // local scope
    let val = 2;

    console.log(x);
    console.log(val)
    console.log('------a-----')
    
    const childFunc = () =>{
        console.log(x += 5);
        console.log(val +=5);
        console.log('------b-----')
    }
    
    // console.log(val)
    // console.log('-------c----')
    return childFunc;
}

const result = parentFunc()
result(); // if call again the function the value will be increased
// a closure can be automatically created by JS when we declared function
// so it will be increased the parent scope value.


console.log(x); // it will return last assigned value.
// console.log(val) // when try access the inside the function variable
// it will return reference error.



//IIFE

const privateFunc = (()=>{
    let count = 0;
    console.log(`initial value: ${count}`);
    return () => {
        count +=1;
        console.log(count)
    }
})(); //iife invoked immediately and excute and store the value in the private

//when we call the privateFunc variable can only the count will be increase

privateFunc(); //1
privateFunc(); //2
privateFunc(); //3


// anthoer example

// imagine playing a game can have 3 credits

const credits = ((num) =>{
    let credits = num;
    console.log(`Initial creadits value is ${credits}.`)

    return()=>{
        credits -=1;
        if(credits>0)
            console.log(`playing game, ${credits} cretdits(s) remining`)
        else
            console.log(`not enough credtis`)
    }
})(3);


credits()
credits()
credits()

// Initial creadits value is 3.
// playing game, 2 cretdits(s) remining
// playing game, 1 cretdits(s) remining
// not enough credtis



