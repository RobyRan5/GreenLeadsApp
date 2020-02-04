var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
});
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "GET https://api.yelp.com/v3/businesses/search",
    "method": "GET",
    "headers": {
      "Authorization": "bearer",

}



$.CHANGE(settings).done(function (response) {
    console.log(response)
});   

var unirest = require('unirest');

unirest.get('https://jsonwhois.com/api/v1/whois')
 .headers({
    'Accept': 'application/json',
    'Authorization': 'Token token=<Api Key>'
 })

   .query({
      "domain": "google.com"
       })

   .end(function (response) {
        console.log(response.body);
});
