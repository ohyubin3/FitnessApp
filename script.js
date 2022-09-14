// Nutrtion Section
var recipeList = document.querySelector('ul');
let proteinContainer = document.querySelector(".dropdown-menu")


let protein;
function getApi(event) {
  if (event.target.matches("a")) {
    protein = event.target.textContent;
    var requestUrl = `https://edamam-recipe-search.p.rapidapi.com/search?q=${protein}`;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].recipes.label;
          recipeList.appendChild(listItem);
        }
      });
  }
}





proteinContainer.addEventListener('click', getApi)
// ////////////////

const nutritionAPI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};
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
