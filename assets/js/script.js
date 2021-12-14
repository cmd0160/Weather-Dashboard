


var getWeatherUpdate = function(city) {
    // format the OpenWeather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9cea4c2c630ad1c978d7cdfabc1cee75";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  getWeatherUpdate("Dallas");