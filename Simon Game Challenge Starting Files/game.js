// step 2
var gamePattern = [];
var userClickedPattern = []; // added as part of step 4
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var lvlCounter = 0;

$(document).keydown(function() {
    nextSequence();
});

function nextSequence() {      // generates random number 1 - 4
    lvlCounter++;
    var updateLevelTitle = $("#level-title").text("Level " + lvlCounter);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    // playSound(randomChosenColor);
    return randomChosenColor;
};


// var chosenColorID = "#" + nextSequence();
// var chosenBlock = $(chosenColorID).fadeOut(100).fadeIn(100);

// step 4 checking which button is pressed
$('.btn').click(function() {
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    // console.log(userClickedPattern);
});


// step 5, creating playSound function for both nextSequence and user selected button
function playSound(name) {
    var chosenColorAudioName = 'sounds/' + name + '.mp3';
    var audio = new Audio(chosenColorAudioName);
    audio.play();
}


// step 6, add animations to user clicks
function animatePress(currentColor) {
    var idCurrentColor = '#' + currentColor;
    var changeStyle = $(idCurrentColor).addClass('pressed');
    setTimeout(function() {
        // Remove the class from the element after the delay
        $(idCurrentColor).removeClass('pressed');
      }, 100);
}