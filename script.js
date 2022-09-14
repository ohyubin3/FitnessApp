const getNutritionAPI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};
let variable = "Tuna"
fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${variable}`,getNutritionAPI)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//

// const fitnessApiOptions = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": "mGkW2J+0c+P7ljsb1CSQYA==wChuA7q7x0pbOnBZ",
//     // "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
//   },
//   contentType: "application/json"
// };

// fetch(
//   "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing",
//   fitnessApiOptions
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
// //

const fitnessOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1',
		'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing', fitnessOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));