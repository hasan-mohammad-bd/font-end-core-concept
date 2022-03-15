const LoadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    const container = document.getElementById("countries");
    container.innerHTML = allCountriesHTML.join(" ");//to remove ","
}

const getCountryHTML = country => {
    return `
        <div class="card">
            <h2>${country.name.common}</h2>
            <img src = "${country.flags.png}">
        </div>
    `
}

LoadCountries();