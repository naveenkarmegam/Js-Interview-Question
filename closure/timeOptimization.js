
// time optimization of closure


// without closure
function find(index) {
    let a = []
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    console.log(a[index])
}

console.time('6')
find(6);
console.timeEnd('6')
console.time('50')
find(50);
console.timeEnd('50')


//with closures

function findWith() {
    let a = []
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    return function (index) {
        console.log(a[index]);
    }
}


const closure = findWith()

console.time('6')
closure(6);
console.timeEnd('6')
console.time('50')
closure(50);
console.timeEnd('50')


