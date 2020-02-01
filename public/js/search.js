$(document).ready(function() {

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "2b1f9e6733msh22bb848a9641962p19a128jsn799dd10dfb90"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response)
}   
var userInput = $("field.search");
var cityInput = $("input#city");
var stateInput = $("input#state");
var yelpVerticle = $("select.option");

search.on("Go!", function(event) {
    event.preventDefault();
    var searchData = {
        city: cityInput.val().trim(),
        state: stateInput.val().trim(),
        yelpVerticle: yelpVerticleInput.val().trim()
    };
    function userInput(city, state, yelpVerticle) {
        $.post("api/login", {
            city: cityInput, 
            state: stateInput,
            yelpVerticle: yelpVerticle,
        })
        .then(function() {
            window.location.replace("/results");
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});
});

