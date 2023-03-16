var searchBar = document.querySelector('#searchInput');
var submitBtn = document.querySelector("#submitBtn");
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
        currenciesDiv.textContent = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
      var capitalDiv = document.createElement('div');
        capitalDiv.setAttribute('id', 'capital')
        capitalDiv.textContent = data[0].capital[0]
      var languageDiv = document.createElement('div');
        languageDiv.setAttribute('id', 'language')
        languageDiv.textContent= data[0].languages;//Languages not displaying on page
      var mapsDiv = document.createElement('div');
        mapsDiv.setAttribute('id', 'maps');
        mapsDiv.textContent = data[0].maps.googleMaps;
      var regionDiv = document.createElement('div');
        regionDiv.setAttribute('id', 'region');
        regionDiv.textContent = data[0].region;
      var populationDiv = document.createElement('div');
        populationDiv.setAttribute('id', 'population');
        populationDiv.textContent = data[0].population;//Population not displaying on page
      var container1 = document.querySelector('.container');
        container1.appendChild(currenciesDiv);
        container1.appendChild(capitalDiv);
        container1.appendChild(languageDiv);
        container1.appendChild(mapsDiv);
        container1.appendChild(regionDiv);
        container1.appendChild(populationDiv);
    
    });
});