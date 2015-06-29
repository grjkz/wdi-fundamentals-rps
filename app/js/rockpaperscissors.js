////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
if (!move) {
	move = getInput();
}
    return move;
}



function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

if (!move) {
	move = randomPlay();
}
    return move;
}



function getWinner(playerMove,computerMove) {
	var winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
console.log("Computer throws " + computerMove);

if (playerMove == "rock" && computerMove == "scissors") {
	winner = "player";
	console.log("You Win!");
}
else if (playerMove == "paper" && computerMove == "rock") {
	winner = "player";
	console.log("You Win!");
}
else if (playerMove == "scissors" && computerMove == "paper") {
	winner = "player";
	console.log("You Win!");
}
else if (playerMove == "scissors" && computerMove == "rock") {
	winner = "computer";
	console.log("You Lose!");
}
else if (playerMove == "rock" && computerMove == "paper") {
	winner = "computer";
	console.log("You Lose!");
}
else if (playerMove == "paper" && computerMove == "scissors") {
	winner = "computer";
	console.log("You Lose!");
}
else {
winner = "tie";
}

	return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
while ((playerWins < 5) && (computerWins < 5)) {
var winner = getWinner(getPlayerMove(null), getComputerMove(null));
if (winner == "player") { playerWins++; }
else if (winner == "computer") { computerWins++; }
else { console.log("It’s a Tie!"); }
    console.log("[Player: " + playerWins + "]  [Computer: " + computerWins + "]");
}
if (playerWins == 5) { console.log("You are Victorious!"); }
else { console.log("The RNG has beaten you!") }
}
playToFive();
