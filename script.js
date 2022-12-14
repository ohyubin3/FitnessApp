// Nutrition Section
var recipeList = document.querySelector("ul");
let proteinContainer = document.querySelector(".dropdown-menu");
let recipeDetail = document.querySelector("li");
let infoCard = document.querySelector("#infoCard");
let calorieCard = document.querySelector("#calorieCard");
let totalCal = 0;
let burnCal = 0;
console.log(recipeList);

const nutritionAPI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0130b13c3dmsh8f19b43bb8c6163p102256jsn3bbb0c86175f",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};
const fitnessOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
  },
};

// --------------Protein options and selections and calories below-------------
let protein;
function getApi(event) {
  $("li").remove();
  if (event.target.matches("a")) {
    protein = event.target.textContent;
    document.getElementById("dropdownMenuLink").innerHTML = protein;
    var requestUrl = `https://edamam-recipe-search.p.rapidapi.com/search?q=${protein}`;
    fetch(requestUrl, nutritionAPI)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        let recipes = data.hits;
        for (var i = 0; i < recipes.length; i++) {
          var listItem = document.createElement("li");
          listItem.dataset.cal = Math.floor(
            parseInt(recipes[i].recipe.calories)
          );
          listItem.innerHTML = `${recipes[i].recipe.label}`;
          recipeList.appendChild(listItem);
          listItem.dataset.url = recipes[i].recipe.url;
        }
      });
  }
}
//----------------------------------- Protein options above--------------

//------------------------------------Calories info below -----------------
function displayDetail(event) {
  if (event.target.matches("li")) {
    $("p").remove();
    $("h4").remove();
    let labelEl = document.createElement("h4");
    labelEl.innerHTML = `<a href=${event.target.dataset.url}>${event.target.textContent}</a>`;
    infoCard.appendChild(labelEl);

    let calorieEl = document.createElement("p");
    calorieEl.textContent = "Calories: " + event.target.dataset.cal;
    infoCard.appendChild(calorieEl);
    totalCal = parseInt(event.target.dataset.cal);
    let calorieBurn = document.createElement("h4");
    calorieBurn.textContent = "Total calories consumed: " + totalCal;
    calorieCard.appendChild(calorieBurn);
  }
}

function getFitnessAPI(event) {
  if (event.target.matches("li")) {
    let requestUrl =
      "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=walking";
    fetch(requestUrl, fitnessOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let workout = data[4];
        let calorieBurned = document.createElement("h4");
        calorieBurned.textContent =
          "Calories Burned from 1hr of Walking : " + workout.total_calories;
        burnCal = workout.total_calories;
        calorieCard.appendChild(calorieBurned);
        console.log(workout);
      })
      .then(function () {
        let netCal = totalCal - burnCal;
        let netCalEl = document.createElement("h4");
        netCalEl.textContent = "Net Caloric Intake: " + netCal;
        calorieCard.appendChild(netCalEl);
        console.log(netCal);
      });
  }
}

//-------------------------------Calories info above ---------------------------
proteinContainer.addEventListener("click", getApi);
recipeList.addEventListener("click", displayDetail);
recipeList.addEventListener("click", getFitnessAPI);
showPrevChoice();

// localstorage system //

recipeList.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    let prevChoice = event.target.textContent;
    localStorage.setItem("savePrevChoice", JSON.stringify(prevChoice));
  }
});

function showPrevChoice() {
  let lastSelect = JSON.parse(localStorage.getItem("savePrevChoice"));
  if (lastSelect !== null) {
    document.querySelector(".show-prev-choice").textContent = lastSelect;
  }
}

//----------------------API below --------------------------------
fetch(
  `https://edamam-recipe-search.p.rapidapi.com/search?q=${protein}`,
  nutritionAPI
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
fetch(
  "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=walking",
  fitnessOptions
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
