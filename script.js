// Nutrtion Section
var recipeList = document.querySelector('ul');
let proteinContainer = document.querySelector(".dropdown-menu")
let recipeDetail = document.querySelector("li")
let infoCard = document.querySelector("#infoCard")

console.log(recipeList)

const nutritionAPI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};


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
        // console.log(data)
        // console.log("hello")
        // console.log(typeof data)
        let recipes = data.hits

        for (var i = 0; i < recipes.length; i++) {
          // console.log("hello", i)
          var listItem = document.createElement('li');
          // console.log(listItem)

          // path for looping over lables
          // console.log(recipes[i].recipe.label)
  // consider doing innerhtml if you want links 
          listItem.dataset.cal = Math.floor(parseInt(recipes[i].recipe.calories))

          listItem.innerHTML = `${recipes[i].recipe.label}`
          // console.log(listItem)

          recipeList.appendChild(listItem);

          listItem.dataset.url = recipes[i].recipe.url)
          listItem.innerHTML = `${recipes[i].recipe.label}`
          recipeList.appendChild(listItem);
          //  console.log(recipeList)
        }
      });
  }
}

function displayDetail(event) {
  if (event.target.matches("li")) {
    // console.log(event.target.textContent)
    // console.log(event.target.dataset.cal)
    let labelEl = document.createElement("p")
    labelEl.textContent = event.target.textContent
    infoCard.appendChild(labelEl)
    
  }
}
//listItem.innerHTML = `<a href=${recipes[i].recipe.url}>${recipes[i].recipe.label}</a>`


//seperate event listener for our ul
// use event delegation to do event.target
// create an element for that 3rd card
// populate that element with the data from our data-attributes
// and append it to that card
proteinContainer.addEventListener('click', getApi)

recipeList.addEventListener('click', displayDetail)

fetch(
  `https://edamam-recipe-search.p.rapidapi.com/search?q=${protein}`,
  nutritionAPI
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//

// // Fitness Section
// const fitnessOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
//     "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing",
//   fitnessOptions
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
