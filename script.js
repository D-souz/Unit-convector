// Length (meters/feet)
let inputMeters = document.getElementById('input-meters');
console.log(inputMeters.textContent);
let inputFeets = document.getElementById('input-feets');
console.log(inputFeets.textContent);

let resultsFeets = document.getElementById('results-feets');
console.log(resultsFeets.textContent);
let resultsMeters = document.getElementById('results-meters');
console.log(resultsMeters.textContent);

// Volume (Liters/Gallons)
let inputLiters = document.getElementById('input-liters');
console.log(inputLiters.textContent);
let inputGallons = document.getElementById('input-gallons');
console.log(inputGallons.textContent);

let resultsGallons = document.getElementById('results-gallons');
console.log(resultsGallons.textContent);
let resultsLiters = document.getElementById('results-liters');
console.log(resultsLiters.textContent);

// Mass (Kilograms/Pounds)
let inputKilos = document.getElementById('input-kilos');
console.log(inputKilos.textContent);
let inputPounds = document.getElementById('input-pounds');
console.log(inputPounds.textContent);

let resultsPounds = document.getElementById('results-pounds');
console.log(resultsPounds.textContent);
let resultsKilos = document.getElementById('results-kilos');
console.log(resultsKilos.textContent);

// Fetching the value input by the user
const userInput = document.querySelector('#userInput');
let userValue = userInput.value;
console.log(userValue);

// Length (Meter to feet)
function meterAndFeet() {
    // Length (Meter to feet)
    // 1 meter = 3.281 feet
    inputMeters.textContent = userValue;
    resultsFeets.textContent = (userValue * 3.281).toFixed(3);
     // Length (Feet to meter)
     inputFeets.textContent = userValue;
     resultsMeters.textContent = (userValue / 3.281).toFixed(3);

}

// Volume (Liters to Gallons)
function literAndGallon() {
    // Volume (Liters to Gallons)
    // 1 liter = 0.2642 gallons
    inputLiters.textContent = userValue;
    resultsGallons.textContent = (userValue * 0.2642).toFixed(3);
    // Volume (Gallons to Liters)
     inputGallons.textContent = userValue;
     resultsLiters.textContent = (userValue / 0.2642).toFixed(3);
}

function kilogramsAndPounds() {
     // Mass (Kilograms to Pounds)
    //  1 kg = 2.2 pounds
    inputKilos.textContent = userValue;
    resultsPounds.textContent = (userValue * 2.2).toFixed(3);
    // Mass (Pounds to Kilograms)
    inputPounds .textContent = userValue;
    resultsKilos.textContent = (userValue / 2.2).toFixed(3);    
}

// Adding an event to the button
const btnConvertor = document.querySelector("#btn-convert");
// console.log(btnConvertor);
btnConvertor.addEventListener('click', function(){

    // // Length (Meter to feet)
    // // 1 meter = 3.281 feet
    // inputMeters.textContent = userValue;
    // resultsFeets.textContent = (userValue * 3.281).toFixed(3);
    //  // Length (Feet to meter)
    //  inputFeets.textContent = userValue;
    //  resultsMeters.textContent = (userValue / 3.281).toFixed(3);

    // // Volume (Liters to Gallons)
    // // 1 liter = 0.2642 gallons
    // inputLiters.textContent = userValue;
    // resultsGallons.textContent = (userValue * 0.2642).toFixed(3);
    // // Volume (Gallons to Liters)
    //  inputGallons.textContent = userValue;
    //  resultsLiters.textContent = (userValue / 0.2642).toFixed(3);

    //  // Mass (Kilograms to Pounds)
    // //  1 kg = 2.2 pounds
    //  inputKilos.textContent = userValue;
    //  resultsPounds.textContent = (userValue * 2.2).toFixed(3);
    //  // Mass (Pounds to Kilograms)
    //  inputPounds .textContent = userValue;
    //  resultsKilos.textContent = (userValue / 2.2).toFixed(3);

    meterAndFeet();
    literAndGallon();
    kilogramsAndPounds();
});