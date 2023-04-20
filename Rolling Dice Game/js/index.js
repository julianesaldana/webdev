// changing first die
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // returns 1 - 6
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";  // images/dice1.png - images/dice6.png
var image1 = document.querySelector(".img1").setAttribute("src", randomDiceImage1); // setting src to new image

// chaning second die
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// determine winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
} else {
    document.querySelector("h1").innerHTML = "TIE!";
}