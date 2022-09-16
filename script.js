// Nutrtion Section
var recipeList = document.querySelector('ul');
let proteinContainer = document.querySelector(".dropdown-menu")
let recipeDetail = document.querySelector("li")
let infoCard = document.querySelector("#infoCard")
let calorieCard = document.querySelector("#calorieCard")
console.log(recipeList)

const nutritionAPI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};

// --------------Protein options and selections and calories below-------------
let protein;
function getApi(event) {
  if (event.target.matches("a")) {
    protein = event.target.textContent;
    var requestUrl = `https://edamam-recipe-search.p.rapidapi.com/search?q=${protein}`;
    fetch(requestUrl, nutritionAPI)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        let recipes = data.hits
        for (var i = 0; i < recipes.length; i++) {
          var listItem = document.createElement('li');
          listItem.dataset.cal = Math.floor(parseInt(recipes[i].recipe.calories))
          listItem.innerHTML = `${recipes[i].recipe.label}`
          recipeList.appendChild(listItem);
          listItem.dataset.url = recipes[i].recipe.url}});}}
//----------------------------------- Protien optoins above--------------

//------------------------------------Calories info below -----------------
function displayDetail(event) {
  if (event.target.matches("li")) {
    let labelEl = document.createElement("h3")
    labelEl.innerHTML = `<a href=${event.target.dataset.url}>${event.target.textContent}</a>`
    infoCard.appendChild(labelEl)

    let calorieEl = document.createElement("p")
    calorieEl.textContent = ("Calories: " + event.target.dataset.cal)
    infoCard.appendChild(calorieEl)}}

proteinContainer.addEventListener('click', getApi)

recipeList.addEventListener('click', displayDetail)

//----------------------API below --------------------------------
fetch(
  `https://edamam-recipe-search.p.rapidapi.com/search?q=${protein}`,
  nutritionAPI
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
const fitnessOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
  },
};
fetch(
  "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing",
  fitnessOptions
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//------------------------API above --------------------------------------