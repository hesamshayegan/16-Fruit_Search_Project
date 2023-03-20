const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const button = document.querySelector('button')

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Render lowercase all the elements in the fruit array
// const lowerCaseFruit = fruit.map(el => el.toLowerCase());		


// Filter the fruit array based on a user's keyword. The keyword could be a complete or part of a fruit's name. 


function search(str) {
let results = [];
	const lowerCaseStr = str.toLowerCase();
	results = fruit.filter(el => (el.toLowerCase()).includes(lowerCaseStr));
				return results
}


//  Handle the showSuggestions function, described after.
function searchHandler(e) {
	const inputValue = document.querySelector('#fruit').value;
	showSuggestions(search(inputValue), inputValue)
	} 	

//  Create an "li" element for each fruit that matches the keyword provided by the user,
//  and append that to the "ul" element under the div element with class equal to "suggestion". All the li elements pop up
//  as a dropdown under the main searchbar.

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	if (inputVal === "") {
		suggestions.innerHTML = "";
	}
	else {
		results.forEach (fruit => {
			const newSuggestion = document.createElement("li");
			newSuggestion.innerText = fruit;
			suggestions.appendChild(newSuggestion)			
		})
	}
}

// fill the searchbar by a user's selected fruit 
function useSuggestion(e) {
	const selectedFruit = e.target
	input.value = selectedFruit.innerText
}

// triger the searchHandler function which results in showing the dropdown list under the searchbar
input.addEventListener('keyup', searchHandler);
// triger the useSuggestion function which results in appearing the selected fruit in the searchbar
suggestions.addEventListener('click', useSuggestion);

// give an alert to the user due to the submission of an empty form
button.addEventListener('click', function(e) {
	if (input.value === "") {
		alert('Please select a fruit')
		return false 
	}
	window.location.href = "https://www.mercato.com/grocery-delivery/ca/san-francisco/fruits-and-vegetables-delivery?keywords="+((input.value))
});


