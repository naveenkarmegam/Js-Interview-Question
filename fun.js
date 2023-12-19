

// function one(callback){
//     console.log('naveen')
//     callback()
// }

// function two() {
//     console.log('santhosh')
// }

// one(two)
// function greet (name, call) {
//     const  a = ''
// }


// a()
// var a = function() {
//     console.log(1)
// }

// var obj = new MyClass(); // Works
// class MyClass {}

 
// console.log(x)
// var x = 5;

// function one(){
  
// }
// one()

// 'use strict';
// delete a;
// console.log(Math.PI = 3333)

function ex(){
    // console.log(this)

    console.log(a,b,c);

    var a = 10;
    let b = 10;
    const c = 10;

}
// ex()

// const a = [1,2,3,4].forEach(()=> {});
// console.log(a);

// const h = (function (){
//     let count = 0;
//     return (function(){
//         console.log(count+=1)
//     })
// })()
// h()
// h()
// h()
// h()
// let name = "naveen"
// var con =() => console.log(this)
// const con1 =() => console.log(this)
// const con2 =() => console.log(this.name)

// con()
// con1()
// con2()

// var a ;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 10;
// let b = 10;
// let c = 10;

let calculator = {
    total:0,
    add(val){
        this.total+= val;
        return this;
    },
    mul(val){
        this.total*= val;
        return this;
    },
    sub(val){
        this.total-= val;
        return this;
    },
    div(val){
        this.total/= val;
        return this;
    }
}

const result = calculator.add(10).mul(10).sub(10).div(9).add(10).sub(20)    //method chaining
console.log(result.total)