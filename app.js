/* App for Weather JS App */

let apiPath = "https://api.openweathermap.org/data/2.5/weather?q=";
let city = document.getElementById("input-field");
let apiKey = "&appid=ac9c7e098804970df18b51b4503e8256";
let units = "&units=imperial"; /* Units of measurement for temperature */

let weatherButton = document.getElementById("weather-button");

weatherButton.addEventListener("click", getWeather);

function getWeather() {
    let url = apiPath + city.value + apiKey + units;

    fetch(url).then(response => {
        console.log(response);
        return response.json();
    }).then(response => {
        console.log(response.main.temp);
        let temp = response.main.temp;
        console.log(temp);
        displayTemp(temp);
    });
}

function displayTemp(temp) {
    document.getElementById("temp").innerHTML = `${temp} °F`;
    document.getElementById("temp").className = "temp";
    document.getElementById("weather-data-div").className = "weather-data-div-display"
    document.getElementById("weather-app-sentence").className = "weather-app-sentence-display";
    document.getElementById("divider").className = "divider-display";
    document.getElementById("reset-button").className = "reset-button-display";
}




