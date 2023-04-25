const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// default webpage
app.use(bodyParser.urlencoded({extended: true}));

// for calculator.js
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is: " + result);
});

// for bmicalculator.js
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
  
app.post('/bmicalculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI is: " + bmi.toFixed(2));
});

// hosting page on local host port 3000
app.listen(port, () => {
    console.log("Example app listening on port ${port}");
});