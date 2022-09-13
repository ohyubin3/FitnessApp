const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));