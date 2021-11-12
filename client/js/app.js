function getAllFoods() {
  fetch("http://localhost:3001/foods")
    .then((r) => r.json())
    .then(appendFoods)
    .catch(console.warn);
}

function submitFood(e) {
  e.preventDefault();

  const foodData = {
    name: e.target.name.value,
    calories: e.target.calories.value,
  };


  const options = {
    method: "POST",
    body: JSON.stringify(foodData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3001/foods", options)
    .then((r) => r.json())
    .then(appendFood)
    .catch(console.warn);
}

function appendFoods(food) {
  food.forEach(appendFood);
}

function appendFood(foodsData) {
  const newLi = document.createElement("li");
  newLi.textContent = `Name: ${foodsData.name} Calories: ${foodsData.calories}`;
  const foodsList = document.querySelector("ul");
  foodsList.append(newLi);
}



function getMessage() {
  fetch("http://localhost:3001")
    .then((r) => r.text())
    .then(renderMessage)
    .catch(console.warn);
}

function renderMessage(msgText) {
  const msg = document.createElement("li");
  msg.textContent = msgText;
  msg.style.color = "red";
  foods.body.append(msg);
}

// ********************************************

module.exports = {
  getAllFoods,
  submitFood,
  appendFoods,
  appendFood,
  getMessage,
  renderMessage,
};
