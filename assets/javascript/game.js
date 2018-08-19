var wins = 0
var losses = 0
var guessesleft = 12
var guessessofar = []

var computerChoices = ["banana", "chocolate", "cucumber", "orange"]

document.onkeyup = function(event) {
var userGuess = event.key;
guessessofar.push(userGuess)
guessesleft = guessesleft-1;

if (userGuess == computerGuess) {
    wins++; 
} else {
    losses++;
}

var html =
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>Number of guesses remaining: " + guessesleft + "</p>"+
"<p>Letters already guessed: " + guessessofar + "</p>";

document.getElementById("game").innerHTML = html;

//how to reset the guesses left & guesses so far

for (var i = 0; i < computerChoices.length; i++) {

}

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}


