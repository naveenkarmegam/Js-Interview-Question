// // async function asyncFunc(){
// //     const value 	= await Promise.resolve(5);
// //     return value*2;
// // }
// // asyncFunc().then(value=>console.log(value));


// // function outer()	{
// //     let count	=	0;
// //     return function	inner(){
// //       count++;
// //       console.log(count);
// //     };
// //   }



// //  async function bar(){
// //     return 1;
// //  }async function baz(){
// //     const result=await bar();
// //     return result+1;
// //  }
// //  baz().then(result=>console,log(result));


// //  async function asyncFunc(){
// //     const   result = await Promise.resolve(1) ;
// //     return result;
// // }
// // asyncFunc().then(value=>console.log(value));

// // let a = 10
// function bar() {
//     return 1;
// }
// async function baz() {

//     const result = await bar();
//     a += 10;
//     return result + 1;
// }
// baz().then(result => console.log(result)).then(console.log(a))
// // const res = baz()
// // console.log(res)

// console.log("test")
// console.log(a)
// console.log("test2")

let ar = [10,20,30]
let sum = 0;

for(let i in ar){
    console.log(typeof(i))
    sum+=i
}