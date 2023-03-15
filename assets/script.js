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
      var currenciesDiv = document.createElement('div');//Creates a <div> for the given parameter
        currenciesDiv.setAttribute('id', 'currency');//Once the div is created it gives it a specific ID
        currenciesDiv.textContent = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
      var capitalDiv = document.createElement('div');//Creates a <div> for the given parameter
        capitalDiv.setAttribute('id', 'capital')//Once the div is created it gives it a specific ID
        capitalDiv.textContent = data[0].capital[0]
      var languageDiv = document.createElement('div');//Creates a <div> for the given parameter
        languageDiv.setAttribute('id', 'language')//Once the div is created it gives it a specific ID
        //languageDiv.textContent = data[0].languages[Object.keys(data[0].languages)][0].name
        languageDiv.textContent= data[0].languages[Object.keys(data[0].languages)].name;
      var mapsDiv = document.createElement('div');//Creates a <div> for the given parameter
        mapsDiv.setAttribute('id', 'maps');//Once the div is created it gives it a specific ID
        mapsDiv.textContent = data[0].maps.googleMaps;
      var regionDiv = document.createElement('div');//Creates a <div> for the given parameter
        regionDiv.setAttribute('id', 'region');//Once the div is created it gives it a specific ID
        regionDiv.textContent = data[0].region;
      var container1 = document.querySelector('.container');
        container1.appendChild(currenciesDiv);
        container1.appendChild(capitalDiv);
        container1.appendChild(languageDiv);
        container1.appendChild(mapsDiv);
        container1.appendChild(regionDiv);
    
    });
});