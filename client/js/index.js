// ********************************************
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#new-food-form');
const foods = document.querySelector("#foods")

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitFood);

// Fetch all cats as soon as app is loaded
getAllFoods();
// ********************************************