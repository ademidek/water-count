let countElement = document.getElementById('count');
let count = parseInt(countElement.innerHTML, 10); 
let wlElement = document.getElementById('water-log');
let waterlog = parseFloat(document.getElementById("water-log").textContent); 
let waterUnit = document.getElementById("metric-units").value;
let prevUnit = "bottle";
let prevConst = 1;

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
    // Get the selected unit from the dropdown
    waterUnit = document.getElementById("metric-units").value;  

    // Conversion factors for each unit
    const conversionFactors = {
        bottle: 1,
        gallons: 0.1328125000,
        liters: 0.5,
        ounces: 16,
        cups: 2.11,
        milliliters: 500
    };
    waterlog = waterlog / prevConst;

    if (waterUnit === "bottle") {
        // Edge case for bottle
        waterlog = Math.round(waterlog * 100) / 100;
    } else {
        waterlog = waterlog * conversionFactors[waterUnit];
    }

    document.getElementById("water-log").innerHTML = waterlog.toFixed(2);

    prevUnit = waterUnit;
    prevConst = conversionFactors[waterUnit];
}

