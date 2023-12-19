
// setTimeout 
function a() {
    for(var i = 0; i < 5; i++){
        setTimeout(()=>{
            console.log(i) //5 5 5 5 5 
        },i*1000);
    }
}

// a();
// var keyword doesn't have a block scope, it have only a function scope


function b() {
    for(let i = 0; i < 5; i++){
        setTimeout(()=>{
            console.log(i) //0 1 2 3 4
        },i*1000);
    }
}

// b();

//let have a block scope


for(var i = 0; i < 5; i++){
    function inner(i) {
        setTimeout(()=>{
            console.log(i) 
        },i*1000);
    }
    inner(i);
}
//var have function scope
// every time the function will be calling it allocate separate memory
// so , i will be local varible