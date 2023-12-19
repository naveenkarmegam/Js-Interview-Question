// debouncing
// its help use optimize how we call the certain events


// create a button UI and add debounce as follows =>
//      --> Show 'Button pressed <X> times' every time button is pressed
//      --> INcrese "Triggered <Y> times" count afte 800ms of debounce


const btn = document.querySelector('.btn')
const inc_press = document.querySelector('.inc_pressed')
const inc_count = document.querySelector('.inc_count')

var pressedCount  = 0;
var triggeredCount = 0;
const myDeboounce = (func,delay)=> {
    let timer;

    return function (...args) { //extra argumets
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args)
        },delay)

    }
}
const debounceCount = myDeboounce(()=>{
    triggeredCount +=1; 
    inc_count.innerHTML = triggeredCount;
},800)
btn.addEventListener('click',()=>{
    inc_press.innerHTML = ++pressedCount;
    debounceCount()
})
