let countElement = document.getElementById('count');
let count = parseInt(countElement.innerHTML, 10); 
let wlElement = document.getElementById('water-log');
let waterlog = parseInt(wlElement.innerHTML, 10); 

function increment() {
    count += 1; 
    countElement.innerHTML = count; 
}

function decrement() {
    if (count > 0) { 
        count -= 1;
        countElement.innerHTML = count; 
    }
}

function logwater(){
    waterlog += count;
    wlElement.innerHTML = waterlog;
    count = 0;
    countElement.innerHTML = count;
}