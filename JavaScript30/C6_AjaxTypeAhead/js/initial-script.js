console.log('it works');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesData = [];
const searchInput = document.querySelector('#txtCities');
const searchSuggestions = document.querySelector('.ajax-form__suggestions');

// Get Data
const citiesPromise = fetch(endpoint);

// Fetch Error Handler
function errorHandler(error) {
    console.log(error);
}

// enable input after data fetch
function enableInput () {
    searchInput.disabled = false;
    console.log(citiesData);
}

// filter cities data
function filterCities(value) {
    const filteredData = citiesData.filter(city => {
        const cityName = city.city.toLowerCase();
        const cityState = city.state.toLowerCase();
        const searchVal = value.toLowerCase();
        return cityName.includes(searchVal) || cityState.includes(searchVal);
    });
    return filteredData;
}

// highlight search value in location
function highlighSearchValue (searchValue, city, state) {
    let location = `${city}, ${state}`;
    const pattern = new RegExp(searchValue, 'gi');
    location = location.replace(pattern, `<span class="hl">${searchValue}</span>`);
    return location;
}

// Display Suggestions
function displaySuggestion() {
    const searchValue = this.value;
    searchSuggestions.innerHTML = '';

    if (searchValue.length < 2) { return; }

    // filter cities data
    const filteredCities = filterCities(searchValue);
    filteredCities.forEach(city => {
        const location = highlighSearchValue(searchValue, city.city, city.state);
        const cityElement = `
            <li>
                <p>
                    <span class="ajax-form__suggestions-location">${location}</span>
                    <span class="ajax-form__suggestions-population">${city.population}</span>
                </p>
            </li>
        `;
        searchSuggestions.insertAdjacentHTML('beforeend', cityElement);
    });
}

citiesPromise.then(response => {
    return response.json();
}).then(data => {
    citiesData.push(...data);
    enableInput();
}).catch(errorHandler);

// search listener
searchInput.addEventListener('keyup', displaySuggestion);
