const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));       // needed to start parsing through the body of the post request


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    // console.log(req.body.lat);
    // console.log(req.body.lon);
    // console.log("Post request received");
    // const lat = "33.83";
    // const lon = "-118.28";
    
    const lat = req.body.lat;
    const lon = req.body.lon;
    const units = "imperial";
    const appid = "b7d3854c9baec8ea6279b22c2483c188";
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appid + "&units=" + units;

    https.get(url, function (response) {
        response.on("data", function(data){
            const weatherData = JSON.parse(data);   // parsing all json data stored in API link
            const temp = weatherData.main.temp; // storing temperature
            const weatherDescription = weatherData.weather[0].description;      // weather data is an array in json
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";   // api also provides images 
            res.write("<p>The weather is currently: " + weatherDescription + "</p>");
            res.write("<h1>Your location's temperature is: " + temp + " degress Fahrenheit.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});