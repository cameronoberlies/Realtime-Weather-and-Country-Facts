var searchBar = document.querySelector('#searchInput');
var submitBtn = document.querySelector("#submitBtn");
var container1 = document.querySelector('.container');
var wikiLink = "https://en.wikipedia.org/wiki/";
var populationWikiLink = "https://en.wikipedia.org/wiki/Demographics_of_";
console.log(wikiLink);
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
      var currenciesDiv2 = document.createElement('a');
        currenciesDiv2.setAttribute('href', wikiLink + data[0].currencies[Object.keys(data[0].currencies)[0]].name);
        currenciesDiv2.setAttribute('target', '_blank');
        currenciesDiv2.textContent = 'Wiki Link'
      var capitalDiv = document.createElement('div');
        capitalDiv.setAttribute('id', 'capital')
        capitalDiv.textContent = "Capital:" + data[0].capital[0]
      var capitalDiv2 = document.createElement('a')
        capitalDiv2.setAttribute('href', wikiLink + data[0].capital[0]);
        capitalDiv2.setAttribute('target', '_blank');
        capitalDiv2.textContent = 'Wiki Link';
        console.log(capitalDiv2);
      var languageDiv = document.createElement('div');
        languageDiv.setAttribute('id', 'language')
        languageDiv.textContent= "Language: " + data[0].languages[Object.keys(data[0].languages)[0]]; 
      var languageDiv2 = document.createElement('a');
        languageDiv2.setAttribute('href', wikiLink +  data[0].languages[Object.keys(data[0].languages)[0]]);
        languageDiv2.setAttribute('target', '_blank');
        languageDiv2.textContent = ('Wiki Link');
      var mapsDiv = document.createElement('a');
        mapsDiv.setAttribute('href', data[0].maps.googleMaps,);
        mapsDiv.setAttribute('target', '_blank');
        mapsDiv.textContent = 'Google Maps';
      var regionDiv = document.createElement('div');
        regionDiv.setAttribute('id', 'region');
        regionDiv.textContent = "Region: " + data[0].region;
      var regionDiv2 = document.createElement('a');
        regionDiv2.setAttribute('href', wikiLink + data[0].region );
        regionDiv2.setAttribute('target', '_blank');
        regionDiv2.textContent = 'Wiki Link';
      var populationDiv = document.createElement('div');
        populationDiv.setAttribute('id', 'population');
        populationDiv.textContent = "Population: " + data[0].population;
      var populationDiv2 = document.createElement('a');
        populationDiv2.setAttribute('href', populationWikiLink + searchBar.value);
        populationDiv2.setAttribute('target', '_blank');
        populationDiv2.textContent = ('Wiki Link');
      
        container1.appendChild(currenciesDiv);
        container1.appendChild(currenciesDiv2);
        container1.appendChild(capitalDiv);
        container1.appendChild(capitalDiv2);
        container1.appendChild(languageDiv);
        container1.appendChild(languageDiv2);
        container1.appendChild(mapsDiv);
        container1.appendChild(regionDiv);
        container1.appendChild(regionDiv2)
        container1.appendChild(populationDiv);
        container1.appendChild(populationDiv2);
        
        capitalWeather(data);
    
    });
    function capitalWeather (countryData) {
      var capital = countryData[0].capital[0]
      //Requires API key that can be generated on https://www.weatherapi.com/
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
         //There are no arrays key on objects only eg.data.current.condition.text
         temp_fDiv.textContent = "The temperature in the capital is " + data.current.temp_f + "°F " + "and " + data.current.temp_c + "°C";
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