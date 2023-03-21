var searchBar = document.querySelector("#searchInput");
var submitBtn = document.querySelector("#submitBtn");
var container1 = document.querySelector(".card-1");
var wikiLink = "https://en.wikipedia.org/wiki/";
var populationWikiLink = "https://en.wikipedia.org/wiki/Demographics_of_";
console.log(wikiLink);

function saveData() {
  var input = document.getElementById("searchInput").value;
window.localStorage.setItem("server", input);
console.log(input)
}

var savedSearch = localStorage.getItem("server");

submitBtn.addEventListener("click", function () {
  console.log("testing");
  
  fetch("https://restcountries.com/v3.1/name/" + searchBar.value)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var currenciesDiv = document.createElement("div");
      // var currencyLabel = document.createElement('span');
      currenciesDiv.setAttribute("id", "currency");
      // currenciesDiv.textContent = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
      // var currenciesDiv2 = document.createElement('a');
      var currencyLink =
        wikiLink + data[0].currencies[Object.keys(data[0].currencies)[0]].name;
      var currencyEl =
        data[0].currencies[Object.keys(data[0].currencies)[0]].name;
      // currenciesDiv2.setAttribute('href', wikiLink + data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      // currenciesDiv2.setAttribute('target', '_blank');
      // currenciesDiv2.textContent = data[0].currencies[Object.keys(data[0].currencies)[0]].name
      currenciesDiv.innerHTML = `<span>Currency: <a target="_blank" href=${currencyLink}>${currencyEl}</a></span>`;

      var capitalDiv = document.createElement("div");
      capitalDiv.setAttribute("id", "capital");

      //capitalDiv.textContent = "Capital:" + data[0].capital[0]
      //var capitalDiv2 = document.createElement('a')
      //capitalDiv2.setAttribute('href', wikiLink + data[0].capital[0]);
      //capitalDiv2.setAttribute('target', '_blank');
      //capitalDiv2.textContent = 'Wiki Link';
      var capitalLink = wikiLink + data[0].capital[0];
      var capitalEl = data[0].capital[0];
      capitalDiv.innerHTML = `<span>Capital: <a target = "_blank" href=${capitalLink}>${capitalEl}</a></span>`;

      var languageDiv = document.createElement("div");
      languageDiv.setAttribute("id", "language");
      //languageDiv.textContent= "Language: " + data[0].languages[Object.keys(data[0].languages)[0]];
      //var languageDiv2 = document.createElement('a');
      // languageDiv2.setAttribute('href', wikiLink +  data[0].languages[Object.keys(data[0].languages)[0]]);
      //languageDiv2.setAttribute('target', '_blank');
      //languageDiv2.textContent = ('Wiki Link');
      var languageLink =
        wikiLink + data[0].languages[Object.keys(data[0].languages)[0]];
      var languageEl = data[0].languages[Object.keys(data[0].languages)[0]];
      languageDiv.innerHTML = `<span>Language: <a target = "_blank" href=${languageLink}>${languageEl}</a></span>`;

      var mapsDiv = document.createElement("a");
      mapsDiv.setAttribute("id", "map");
      mapsDiv.setAttribute("href", data[0].maps.googleMaps);
      mapsDiv.setAttribute("target", "_blank");
      mapsDiv.textContent = "Google Maps";

      var regionDiv = document.createElement("div");
      regionDiv.setAttribute("id", "region");
      //regionDiv.textContent = "Region: " + data[0].region;
      //var regionDiv2 = document.createElement('a');
      //regionDiv2.setAttribute('href', wikiLink + data[0].region );
      //regionDiv2.setAttribute('target', '_blank');
      //regionDiv2.textContent = 'Wiki Link';
      var regionLink = wikiLink + data[0].region;
      var regionEl = data[0].region;
      regionDiv.innerHTML = `<span>Region: <a target = "_blank" href=${regionLink}>${regionEl}</a></span>`;

      var populationDiv = document.createElement("div");
      populationDiv.setAttribute("id", "population");
      // populationDiv.textContent = "Population: " + data[0].population;
      //var populationDiv2 = document.createElement('a');
      //populationDiv2.setAttribute('href', populationWikiLink + searchBar.value);
      //populationDiv2.setAttribute('target', '_blank');
      // populationDiv2.textContent = ('Wiki Link');
      var populationLink = populationWikiLink + searchBar.value;
      var populationEl = data[0].population;
      populationDiv.innerHTML = `<span>Population: <a target = "_blank" href=${populationLink}>${populationEl}</a></span>`;


      container1.appendChild(currenciesDiv);
      // container1.appendChild(currenciesDiv2);
      container1.appendChild(capitalDiv);
      //container1.appendChild(capitalDiv2);
      container1.appendChild(languageDiv);
      //container1.appendChild(languageDiv2);
      container1.appendChild(mapsDiv);
      container1.appendChild(regionDiv);
      //container1.appendChild(regionDiv2)
      container1.appendChild(populationDiv);
      //container1.appendChild(populationDiv2);
      var container2 = document.querySelector(".card-3");
      container2.append(searchBar.value);

      capitalWeather(data);
    });
  function capitalWeather(countryData) {
    var capital = countryData[0].capital[0];
    //Requires API key that can be generated on https://www.weatherapi.com/
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=35d7f63e5325473788e112056231603&q=" +
        capital
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data, "Capital Weather");
        var uvDiv = document.createElement("div");
        uvDiv.setAttribute("id", "uv");
        var temp_fDiv = document.createElement("div");
        temp_fDiv.setAttribute("id", "temp_f");
        var temp_cDiv = document.createElement("div");
        temp_fDiv.setAttribute("id", "temp_c");
        var conditionDiv = document.createElement("div");
        conditionDiv.setAttribute("id", "condition");
        var humidityDiv = document.createElement("div");
        humidityDiv.setAttribute("id", "humidity");
        //There are no arrays key on objects only eg.data.current.condition.text
        temp_fDiv.textContent =
          "The temperature in " +
          capital +
          " is " +
          data.current.temp_f +
          " °F " +
          "and " +
          data.current.temp_c +
          "°C";
        uvDiv.textContent =
          "The UV index in " + capital + " is " + data.current.uv;
        conditionDiv.textContent =
          "The current condition in " +
          capital +
          " is " +
          data.current.condition.text;
        humidityDiv.textContent =
          "The current humidity in " +
          capital +
          " is " +
          data.current.humidity +
          "%";
        var container1 = document.querySelector(".card-2");
        container1.appendChild(temp_fDiv);
        container1.appendChild(temp_cDiv);
        container1.appendChild(uvDiv);
        container1.appendChild(conditionDiv);
        container1.appendChild(humidityDiv);
      });
  }
});

// Function to clear search results
function clearAll(){
  document.getElementById("currency").innerHTML = "";
  document.getElementById("capital").innerHTML = "";
  document.getElementById("language").innerHTML = "";
  document.getElementById("region").innerHTML = "";
  document.getElementById("population").innerHTML = "";
  document.getElementById("temp_c").innerHTML = "";
  document.getElementById("condition").innerHTML = "";
  document.getElementById("humidity").innerHTML = "";
  document.getElementById("uv").innerHTML = "";
  document.getElementById("map").innerHTML = "";
};

