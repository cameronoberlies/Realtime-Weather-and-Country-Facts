var searchBar = document.querySelector('#searchInput');
var submitBtn = document.querySelector("#submitBtn");
var container1 = document.querySelector('.container');
submitBtn.addEventListener("click", function () {
  console.log("testing");
  fetch("https://restcountries.com/v3.1/name/" + searchBar.value)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var currenciesDiv = document.createElement('div');
        currenciesDiv.setAttribute('id', 'currency');
        currenciesDiv.textContent = "Currency:" + data[0].currencies[Object.keys(data[0].currencies)[0]].name;
      var capitalDiv = document.createElement('div');
        capitalDiv.setAttribute('id', 'capital')
        capitalDiv.textContent = "Capital:" + data[0].capital[0]
      var languageDiv = document.createElement('div');
        languageDiv.setAttribute('id', 'language')
        languageDiv.textContent= "Language: " + data[0].languages[Object.keys(data[0].languages)[0]];      
        var mapsDiv = document.createElement('a');
        mapsDiv.setAttribute('id', 'maps');
        mapsDiv.textContent = "Google Maps:" + data[0].maps.googleMaps;
      var regionDiv = document.createElement('div');
        regionDiv.setAttribute('id', 'region');
        regionDiv.textContent = "Region: " + data[0].region;
      var populationDiv = document.createElement('div');
        populationDiv.setAttribute('id', 'population');
        populationDiv.textContent = "Population: " + data[0].population;
      
        container1.appendChild(currenciesDiv);
        container1.appendChild(capitalDiv);
        container1.appendChild(languageDiv);
        container1.appendChild(mapsDiv);
        container1.appendChild(regionDiv);
        container1.appendChild(populationDiv);
        capitalWeather(data);
    
    });
    function capitalWeather (countryData) {
      var capital = countryData[0].capital[0]
      fetch("https://api.weatherapi.com/v1/current.json?key=35d7f63e5325473788e112056231603&q=" + capital)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data,"Capital Weather");
        var uvDiv = document.createElement('div');
         uvDiv.setAttribute('id', 'uv');
         var temp_fDiv = document.createElement('div');
         temp_fDiv.setAttribute('id', 'temp_f');
         var temp_cDiv = document.createElement('div');
         temp_fDiv.setAttribute('id', 'temp_c')
         var conditionDiv = document.createElement('div');
         conditionDiv.setAttribute('id', 'condition')
         var humidityDiv = document.createElement('div');
         humidityDiv.setAttribute('id', 'humidity')
         temp_fDiv.textContent = "The temperature in the capital is " + data.current.temp_f + "°F " + "and " + data.current.temp_c + "°C";
         //temp_cDiv.textContent = "The temperature in the capital is "  + data.current.temp_c + " °C";
         uvDiv.textContent = "The UV index in the capital is "  + data.current.uv;
         conditionDiv.textContent = "The current condition in the capital is "  + data.current.condition.text;
         humidityDiv.textContent = "The current humidty in the capital is " + data.current.humidity +"%";
         var container1 = document.querySelector('.container');
         container1.appendChild(temp_fDiv);
         container1.appendChild(temp_cDiv);
         container1.appendChild(uvDiv);
         container1.appendChild(conditionDiv);
         container1.appendChild(humidityDiv);
      })
    }
  
});