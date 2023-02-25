const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
} 
const displayData = countries => {
    const countriesSection = document.getElementById('all_countries');
    console.log(countries.continents);
    // for (const countrie of countries) {
    //     console.log(countrie);
    
    countries.forEach(countrie => {
        // console.log(countrie.capital[0]);

        const countryDiv =  document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h5 >Country Name : ${countrie.name.common} </h5>
        <p class= "mt-3">Capital Name : ${countrie.capital ? countrie.capital[0] : 'NO Capital' } </p>
        <button class="btn btn-primary mt-5" onclick="loadCountryDetalies('${countrie.cca2}')">Country Detailes</button>

    
        `
        countriesSection.appendChild(countryDiv)

    })

}

const loadCountryDetalies = code => {
    const url =  `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = (country) => {
    // console.log(country);
    const countryDetailsDiv =  document.getElementById('country_details')
    countryDetailsDiv.innerHTML = `
    <img src="${country.flags.png}" alt="">
    <h3>Country Nama : ${country.name.common} </h3>

    `

}

loadCountries()