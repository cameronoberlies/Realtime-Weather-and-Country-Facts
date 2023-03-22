var searchBar = document.querySelector("#searchInput");
var submitBtn = document.querySelector("#submitBtn");
var container1 = document.querySelector(".card-1");
var recentSearchVar = document.querySelector(".h2-element");
var container = document.querySelector(".container");
var flagContainer = document.querySelector(".flagDiv1");
//target Wikipedia link
var wikiLink = "https://en.wikipedia.org/wiki/";
//Wikipedia link specific to populationDiv
var populationWikiLink = "https://en.wikipedia.org/wiki/Demographics_of_";
console.log(wikiLink);

//Function saves the search bar input data into local storage.
function saveData() {
  var input = document.getElementById("searchInput").value;
window.localStorage.setItem("server", input);
console.log(input)
}

var savedSearch = localStorage.getItem("server");

//Adds an event listener to the search button 
submitBtn.addEventListener("click", function () {
  console.log("testing");
  
  //After the search button is clicked it calls the REST countries API
  fetch("https://restcountries.com/v3.1/name/" + searchBar.value)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var countryDiv = document.createElement("div");
      countryDiv.setAttribute("id", "country");
      var countryDiv2 = document.createElement("a");
      countryDiv2.setAttribute('href', wikiLink + searchBar.value);
      countryDiv2.setAttribute('target', '_blank');
      countryDiv2.textContent = searchBar.value;

      var currenciesDiv = document.createElement("div");
      var currenciesDiv2 = document.createElement('a');
      // var currencyLabel = document.createElement('span');
      currenciesDiv.setAttribute("id", "currency");
      //var currencyEl = (data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      //var currencyLink = wikiLink + currencyEl;
      currenciesDiv2.setAttribute('href', wikiLink + data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      currenciesDiv2.setAttribute('target', '_blank');
      currenciesDiv2.textContent ="Currency:" + data[0].currencies[Object.keys(data[0].currencies)[0]].name
      //currenciesDiv.innerHTML = `<span>Currency: <a target="_blank" href=${currencyLink}>${currencyEl}</a></span>`;

      var capitalDiv = document.createElement("div");
      var capitalDiv2 = document.createElement('a')
      capitalDiv.setAttribute("id", "capital");
      capitalDiv2.setAttribute('href', wikiLink + data[0].capital[0]);
      capitalDiv2.setAttribute('target', '_blank');
      capitalDiv2.textContent = "Capital:" + data[0].capital[0];
      //var capitalLink = wikiLink + data[0].capital[0];
      //var capitalEl = data[0].capital[0];
      //capitalDiv.innerHTML = `<span>Capital: <a target = "_blank" href=${capitalLink}>${capitalEl}</a></span>`;

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

      var flagDiv = document.createElement('div');
      flagDiv.setAttribute("id", "flag")
      var flagLink = data[0].flags.svg;
      console.log(flagLink);
      flagDiv.innerHTML = `<img src = "${flagLink}" alt="flag image" id = "flagImgID">`;

     
      //Appends all of the dynamically created elements above to their respective containers
      
      container.appendChild(flagDiv);
      flagContainer.append(flagDiv);
      container1.appendChild(countryDiv);
      container1.appendChild(countryDiv2);
      container1.appendChild(currenciesDiv);
      container1.appendChild(currenciesDiv2);
      container1.appendChild(capitalDiv);
      container1.appendChild(capitalDiv2);
      container1.appendChild(languageDiv);
      //container1.appendChild(languageDiv2);
      container1.appendChild(mapsDiv);
      container1.appendChild(regionDiv);
      //container1.appendChild(regionDiv2)
      container1.appendChild(populationDiv);
      //container1.appendChild(populationDiv2);
     
      
      
      
      //Dynamically creates a div to display our search bar inputs that have been saved to local storage and appended to its container
      var container3 = document.querySelector(".card-3");
      var searchLi = document.createElement('div');
      searchLi.setAttribute("id", "listItem");
      container3.append(searchBar.value);
      container3.append(searchLi);
      


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
        var container2 = document.querySelector(".card-2");
        container2.appendChild(temp_fDiv);
        container2.appendChild(temp_cDiv);
        container2.appendChild(uvDiv);
        container2.appendChild(conditionDiv);
        container2.appendChild(humidityDiv);
      });
  }
});





// Function to clear search results
function clearAll(){
  document.getElementById("card1").innerHTML = "";
  document.getElementById("card2").innerHTML = "";
  document.getElementById('searchInput').value = "";
  flagContainer.innerHTML = "";
  
  //document.getElementById("card3").innerHTML = "";
};

