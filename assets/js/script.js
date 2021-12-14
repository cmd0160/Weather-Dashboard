// API URL 
// https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75"


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

      // Current Weather Block
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

      // Five Day Forecast Elements
      // Forecast Subtitle
      var fiveDayForecastTitle = document.createElement("h1")
      weatherInfo.appendChild(fiveDayForecastTitle);
      fiveDayForecastTitle.className = "subtitle";
      fiveDayForecastTitle.textContent = "5 Day Forecast:"

      // Day One Forcast
      var dayOneDate = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneDate);
      dayOneDate.textContent= moment(info.dt.value).format("MMM D, YYYY");

      var dayOneIcon = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneIcon);

      var dayOneTemp = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneTemp);
      dayOneTemp.textContent = "Temperature: " + Math.round(info.main.temp) + " °F";

      var dayOneWind = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneWind);
      dayOneWind.textContent = "Wind Speed: " + info.wind.speed + " MPH";

      var dayOneHum = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneHum);
      dayOneHum.textContent = "Humidity: " + info.main.humidity + " %";

      // Day Two Forecast
      var dayOneDate = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayOneDate);
      dayOneDate.textContent= moment(info.dt.value).format("MMM D, YYYY");

      var dayOneIcon = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayOneIcon);

      var dayOneTemp = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayOneTemp);
      dayOneTemp.textContent = "Temperature: " + Math.round(info.main.temp) + " °F";

      var dayOneWind = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayOneWind);
      dayOneWind.textContent = "Wind Speed: " + info.wind.speed + " MPH";

      var dayOneHum = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayOneHum);
      dayOneHum.textContent = "Humidity: " + info.main.humidity + " %";

      // Day Three Forecast
      var dayOneDate = document.createElement("li");
      fiveDayForecastThree.appendChild(dayOneDate);
      dayOneDate.textContent= moment(info.dt.value).format("MMM D, YYYY");

      var dayOneIcon = document.createElement("li");
      fiveDayForecastThree.appendChild(dayOneIcon);

      var dayOneTemp = document.createElement("li");
      fiveDayForecastThree.appendChild(dayOneTemp);
      dayOneTemp.textContent = "Temperature: " + Math.round(info.main.temp) + " °F";

      var dayOneWind = document.createElement("li");
      fiveDayForecastThree.appendChild(dayOneWind);
      dayOneWind.textContent = "Wind Speed: " + info.wind.speed + " MPH";

      var dayOneHum = document.createElement("li");
      fiveDayForecastThree.appendChild(dayOneHum);
      dayOneHum.textContent = "Humidity: " + info.main.humidity + " %";

      // Day Four Forecast
      var dayOneDate = document.createElement("li");
      fiveDayForecastFour.appendChild(dayOneDate);
      dayOneDate.textContent= moment(info.dt.value).format("MMM D, YYYY");

      var dayOneIcon = document.createElement("li");
      fiveDayForecastFour.appendChild(dayOneIcon);

      var dayOneTemp = document.createElement("li");
      fiveDayForecastFour.appendChild(dayOneTemp);
      dayOneTemp.textContent = "Temperature: " + Math.round(info.main.temp) + " °F";

      var dayOneWind = document.createElement("li");
      fiveDayForecastFour.appendChild(dayOneWind);
      dayOneWind.textContent = "Wind Speed: " + info.wind.speed + " MPH";

      var dayOneHum = document.createElement("li");
      fiveDayForecastFour.appendChild(dayOneHum);
      dayOneHum.textContent = "Humidity: " + info.main.humidity + " %";

      // Day Five Forecast
      var dayOneDate = document.createElement("li");
      fiveDayForecastFive.appendChild(dayOneDate);
      dayOneDate.textContent= moment(info.dt.value).format("MMM D, YYYY");

      var dayOneIcon = document.createElement("li");
      fiveDayForecastFive.appendChild(dayOneIcon);

      var dayOneTemp = document.createElement("li");
      fiveDayForecastFive.appendChild(dayOneTemp);
      dayOneTemp.textContent = "Temperature: " + Math.round(info.main.temp) + " °F";

      var dayOneWind = document.createElement("li");
      fiveDayForecastFive.appendChild(dayOneWind);
      dayOneWind.textContent = "Wind Speed: " + info.wind.speed + " MPH";

      var dayOneHum = document.createElement("li");
      fiveDayForecastFive.appendChild(dayOneHum);
      dayOneHum.textContent = "Humidity: " + info.main.humidity + " %";

  };



  var displayMoreWeatherData = function() {
    console.log("The function was called");
  };
  displayMoreWeatherData();


  
