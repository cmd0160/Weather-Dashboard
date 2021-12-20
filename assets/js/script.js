// API URL 
// https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75"
// "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9cea4c2c630ad1c978d7cdfabc1cee75"

var searchBoxEl = document.querySelector("#citySearchBox");
var inputBoxEl = document.querySelector("#citySearchInput");
var inputBtnEl = document.querySelector("#citySearchBtn");
var weatherContainerEl = document.querySelector("#weather-display-container");
var citySearchTerm = document.querySelector("#city-search-term");
var weatherInfo = document.querySelector("#weatherInfoBox");
var fiveDayForecastOne = document.querySelector("#five-day-forecast-one");
var fiveDayForecastTwo = document.querySelector("#five-day-forecast-two");
var fiveDayForecastThree = document.querySelector("#five-day-forecast-three");
var fiveDayForecastFour = document.querySelector("#five-day-forecast-four");
var fiveDayForecastFive = document.querySelector("#five-day-forecast-five");
var cityReferences = document.querySelector("#savedData"); 
var savedCities = [];
var practice = document.querySelector(".header");



var display5DayWeatherData = function(city) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";

  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      displayWeatherData(data, city);
    });
  });
};

var formSubmitHandler = function(event) {
  event.preventDefault();
  var cityName = inputBoxEl.value.trim();

  if (cityName) {
    display5DayWeatherData(cityName);
    localStorage.setItem("City Search", cityName);
    var data = localStorage.getItem(cityName);
    var cityRef = document.createElement("a");
    cityReferences.appendChild(cityRef);
    cityRef.textContent = cityName;
    inputBoxEl.value = "";
  } else {
      alert ("Please enter a valid City.");
  }
  // console.log(event);
};

searchBoxEl.addEventListener("submit", formSubmitHandler);



  // Current Weather Block
  var displayWeatherData = function(info, searchTerm) {
    console.log(info);
    console.log(searchTerm);
    weatherInfo.textContent = "";

    // Current Weather Block
    var cityNameEl = document.createElement("h1");
    cityNameEl.textContent = info.city.name;
    cityNameEl.style.textAlign = "center";
    weatherInfo.appendChild(cityNameEl);

    var currentDate = document.createElement("p")
    currentDate.textContent= moment(info.list.dt).format("MMM D, YYYY");
    currentDate.style.textAlign = "center";
    weatherInfo.appendChild(currentDate);

    var temperatureEl = document.createElement("p");
    temperatureEl.textContent = "Temperature: " + Math.round(info.list[0].main.temp) + " °F";
    temperatureEl.className = "extra-info";
    weatherInfo.appendChild(temperatureEl);

    var windSpeedEl = document.createElement("p");
    windSpeedEl.textContent = "Wind Speed: " + info.list[0].wind.speed + " MPH";
    windSpeedEl.className = "extra-info";
    weatherInfo.appendChild(windSpeedEl);

    var humidityEl = document.createElement("p");
    humidityEl.textContent = "Humidity: " + info.list[0].main.humidity + " %";
    humidityEl.className = "extra-info";
    weatherInfo.appendChild(humidityEl);
};








  
