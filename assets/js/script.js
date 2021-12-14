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
var cityReferences = document.querySelector("#savedData");

  var display5DayWeatherData = function(city) {
    var apiUrl1 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";

    fetch(apiUrl1).then(function(response) {
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

  var displayWeatherData = function(info, searchTerm) {
      console.log(info);
      console.log(searchTerm);
      weatherContainerEl.textContent = "";

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

      var lineBr = document.createElement("br");
      weatherInfo.appendChild(lineBr);


      // Five Day Forecast Elements
      // Forecast Subtitle
      var fiveDayForecastTitle = document.createElement("h1")
      weatherInfo.appendChild(fiveDayForecastTitle);
      fiveDayForecastTitle.className = "subtitle";
      fiveDayForecastTitle.textContent = "5 Day Forecast:"

      // Day One Forcast
      var dayOneDate = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneDate);
      dayOneDate.textContent= moment(info.list[5].dt_txt).format("MMM D, YYYY");

      var dayOneIcon = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneIcon);

      var dayOneTemp = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneTemp);
      dayOneTemp.textContent = "Temperature: " + Math.round(info.list[5].main.temp) + " °F";

      var dayOneWind = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneWind);
      dayOneWind.textContent = "Wind Speed: " + info.list[5].wind.speed + " MPH";

      var dayOneHum = document.createElement("li");
      fiveDayForecastOne.appendChild(dayOneHum);
      dayOneHum.textContent = "Humidity: " + info.list[5].main.humidity + " %";

      // Day Two Forecast
      var dayTwoDate = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayTwoDate);
      dayTwoDate.textContent = moment(info.list[13].dt_txt).format("MMM D, YYYY");

      var dayTwoIcon = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayTwoIcon);

      var dayTwoTemp = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayTwoTemp);
      dayTwoTemp.textContent = "Temperature: " + Math.round(info.list[13].main.temp) + " °F";

      var dayTwoWind = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayTwoWind);
      dayTwoWind.textContent = "Wind Speed: " + info.list[13].wind.speed + " MPH";

      var dayTwoHum = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayTwoHum);
      dayTwoHum.textContent = "Humidity: " + info.list[13].main.humidity + " %";

      // Day Three Forecast
      var dayThreeDate = document.createElement("li");
      fiveDayForecastThree.appendChild(dayThreeDate);
      dayThreeDate.textContent = moment(info.list[21].dt_txt).format("MMM D, YYYY");

      var dayThreeIcon = document.createElement("li");
      fiveDayForecastTwo.appendChild(dayThreeIcon);

      var dayThreeTemp = document.createElement("li");
      fiveDayForecastThree.appendChild(dayThreeTemp);
      dayThreeTemp.textContent = "Temperature: " + Math.round(info.list[21].main.temp) + " °F";

      var dayThreeWind = document.createElement("li");
      fiveDayForecastThree.appendChild(dayThreeWind);
      dayThreeWind.textContent = "Wind Speed: " + info.list[21].wind.speed + " MPH";

      var dayThreeHum = document.createElement("li");
      fiveDayForecastThree.appendChild(dayThreeHum);
      dayThreeHum.textContent = "Humidity: " + info.list[21].main.humidity + " %";

      // Day Four Forecast
      var dayFourDate = document.createElement("li");
      fiveDayForecastFour.appendChild(dayFourDate);
      dayFourDate.textContent = moment(info.list[29].dt_txt).format("MMM D, YYYY");

      var dayFourIcon = document.createElement("li");
      fiveDayForecastFour.appendChild(dayFourIcon);

      var dayFourTemp = document.createElement("li");
      fiveDayForecastFour.appendChild(dayFourTemp);
      dayFourTemp.textContent = "Temperature: " + Math.round(info.list[29].main.temp) + " °F";

      var dayFourWind = document.createElement("li");
      fiveDayForecastFour.appendChild(dayFourWind);
      dayFourWind.textContent = "Wind Speed: " + info.list[29].wind.speed + " MPH";

      var dayFourHum = document.createElement("li");
      fiveDayForecastFour.appendChild(dayFourHum);
      dayFourHum.textContent = "Humidity: " + info.list[29].main.humidity + " %";

      // Day Five Forecast
      var dayFiveDate = document.createElement("li");
      fiveDayForecastFive.appendChild(dayFiveDate);
      dayFiveDate.textContent = moment(info.list[37].dt_txt).format("MMM D, YYYY");

      var dayFiveIcon = document.createElement("li");
      fiveDayForecastFive.appendChild(dayFiveIcon);

      var dayFiveTemp = document.createElement("li");
      fiveDayForecastFive.appendChild(dayFiveTemp);
      dayFiveTemp.textContent = "Temperature: " + Math.round(info.list[37].main.temp) + " °F";

      var dayFiveWind = document.createElement("li");
      fiveDayForecastFive.appendChild(dayFiveWind);
      dayFiveWind.textContent = "Wind Speed: " + info.list[37].wind.speed + " MPH";

      var dayFiveHum = document.createElement("li");
      fiveDayForecastFive.appendChild(dayFiveHum);
      dayFiveHum.textContent = "Humidity: " + info.list[37].main.humidity + " %";

  };






  
