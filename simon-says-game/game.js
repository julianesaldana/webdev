// things needed for game logic and global variables
var gamePattern = [];
var userPattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var lvlCounter = 0;
var started = false;

// checking if user has started game
$(document).ready(function() {
    $(document).keydown(function() {
        if (!started) {
            nextSequence();
            started = true;
        }
    });
});


// checking which color button is clicked on, plays sound and animation
$(document).ready(function() {
    $('.btn').click(function() {
        var userChosenColor = $(this).attr("id");
    
        playSound(userChosenColor);
        animatePress(userChosenColor);
    
        userPattern.push(userChosenColor);
    
        checkAnswer(userPattern.length - 1);
    });
});


// animates next sequence
function nextSequence() {
    userPattern = [];
    lvlCounter++;
    
    $("#level-title").text("Level " + lvlCounter);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNumber];
    
    gamePattern.push(randomColor);

    var chosenColorID = "#" + randomColor;
    $(chosenColorID).fadeOut(100).fadeIn(100);
    
    playSound(randomColor);
};


// plays sound for specific button
function playSound(name) {
    var chosenColorAudioName = 'sounds/' + name + '.mp3';
    var audio = new Audio(chosenColorAudioName);
    audio.play();
};


// animations for user clicks
function animatePress(currentColor) {
    var idCurrentColor = '#' + currentColor;
    $(idCurrentColor).addClass('pressed');
    setTimeout(function() {
        // Remove the class from the element after the delay
        $(idCurrentColor).removeClass('pressed');
    }, 100);
};


// checking if user pattern matches game pattern
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();     // call nextSequence
            }, 1000);
        }
    } else {
        animateGameOver();
        startOver();
    }
}


// animating game over
function animateGameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound('wrong')
    $(document.body).addClass('game-over');
    setTimeout(function() {
        // Remove the class from the element after the delay
        $(document.body).removeClass('game-over');
    }, 200);
};


// starting game over, resetting variables
function startOver() {
    lvlCounter = 0;
    gamePattern = [];
    started = false;
};
