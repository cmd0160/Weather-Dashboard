// API URL 
// https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75"


var searchBoxEl = document.querySelector("#citySearchBox");
var inputBoxEl = document.querySelector("#citySearchInput");
var inputBtnEl = document.querySelector("#citySearchBtn");
var weatherContainerEl = document.querySelector("#weather-display-container");
var citySearchTerm = document.querySelector("#city-search-term");
var weatherInfo = document.querySelector("#weatherInfoBox");


var getWeatherUpdate = function(city) {
    // format the OpenWeather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
  
    // make a request to the url
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
       getWeatherUpdate(cityName);
       inputBoxEl.value = "";
    } else {
        alert ("Please enter a valid City.");
    }
    // console.log(event);
  };

  searchBoxEl.addEventListener("submit", formSubmitHandler);


  var displayWeatherData = function(info, searchTerm) {
      console.log(info);
      console.log(searchTerm);
      weatherContainerEl.textContent = "";
      citySearchTerm.textContent = searchTerm;

      var cityNameEl = document.createElement("h1");
      cityNameEl.textContent = searchTerm;
      cityNameEl.style.textAlign = "center";
      weatherInfo.appendChild(cityNameEl);

      var currentDate = document.createElement("p")
      currentDate.textContent= moment(info.dt.value).format("MMM D, YYYY");
      currentDate.style.textAlign = "center";
      weatherInfo.appendChild(currentDate);

      var temperatureEl = document.createElement("p");
      temperatureEl.textContent = "Temperature: " + Math.round(info.main.temp) + " °F";
      temperatureEl.className = "extra-info";
      weatherInfo.appendChild(temperatureEl);
      
      var humidityEl = document.createElement("p");
      humidityEl.textContent = "Humidity: " + info.main.humidity + " %";
      humidityEl.className = "extra-info";
      weatherInfo.appendChild(humidityEl);

      var windSpeedEl = document.createElement("p");
      windSpeedEl.textContent = "Wind Speed: " + info.wind.speed + " MPH";
      windSpeedEl.className = "extra-info";
      weatherInfo.appendChild(windSpeedEl);
  };