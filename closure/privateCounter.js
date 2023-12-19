
// how would you use a closure to create a private counter


function counter() {
    var _counter = 0;
    
    function add(increment) {
        _counter += increment
    }

    function retrive(){
        return `counter = ${_counter}`
    }

    return{
        add, retrive
    }
}
const closure = counter ()

closure.add(5)
closure.add(20)

console.log(closure.retrive())

console.log(counter.retrive())