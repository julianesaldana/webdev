const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=33.83&lon=-118.28&appid=b7d3854c9baec8ea6279b22c2483c188&units=imperial"
    https.get(url, function (response) {
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp; // gets hold of temperature
            const weatherDescription = weatherData.weather[0].description;      // weather object is an array
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in Carson is: " + temp + " degress Fahrenheit.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});