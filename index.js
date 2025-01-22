let countElement = document.getElementById('count');
let count = parseInt(countElement.innerHTML, 10); 
let wlElement = document.getElementById('water-log');
let waterlog = parseFloat(document.getElementById("water-log").textContent); 
let waterUnit = document.getElementById("metric-units").value;

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

function convert() {
    let waterUnit = document.getElementById("metric-units").value;  
    let waterlog = parseFloat(document.getElementById("water-log").textContent);
    
    if (waterUnit === "gallons") {
        waterlog = waterlog * 0.1328125000;
        document.getElementById("water-log").innerHTML = waterlog;
    } else if (waterUnit === "liters") {
        waterlog = waterlog * 0.5;
        document.getElementById("water-log").innerHTML = waterlog;
    } else if (waterUnit === "ounces") {
        waterlog = waterlog * 16;
        document.getElementById("water-log").innerHTML = waterlog;
    } else if (waterUnit === "cups") {
        waterlog = waterlog * 2.11;
        document.getElementById("water-log").innerHTML = waterlog;
    } else if (waterUnit === "milliliters") {
        waterlog = waterlog * 500;
        document.getElementById("water-log").innerHTML = waterlog;
    }
}
