const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('#txtCities');
const searchSuggestions = document.querySelector('.ajax-form__suggestions');

// Get Data
const citiesPromise = fetch(endpoint);
citiesPromise.then(response => {
    return response.json();
}).then(data => {
    cities.push(...data);
    enableInput();
}).catch(errorHandler);


// Fetch Error Handler
function errorHandler(error) {
    console.log(error);
}

// enable input after data fetch
function enableInput() {
    searchInput.disabled = false;
}

function findMatches(wordTomatch, cities) {
    const regex = new RegExp(wordTomatch, 'gi');
    const matches = cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
    return matches;
}

function displaySuggestion() {
    const suggestions = findMatches(this.value, cities);
    const suggestionsHTML = suggestions.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const location = `
            ${place.city.replace(regex, `<span class="hl">${this.value}</span>`)}, 
            ${place.state.replace(regex, `<span class="hl">${this.value}</span>`)}
            `;
        return `
            <li>
                <p>
                    <span class="ajax-form__suggestions-location">${location}</span>
                    <span class="ajax-form__suggestions-population">${place.population}</span>
                </p>
            </li>
        `;
    }).join('');
    searchSuggestions.innerHTML = suggestionsHTML;
}

// search listener
searchInput.addEventListener('keyup', displaySuggestion);
