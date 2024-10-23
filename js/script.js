//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let totalWins = 0;
let totalLosses = 0;

initializeGame();

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("Random number: " + randomNumber);
  console.log("Total Wins: " + totalWins);
  console.log("Total Losses: " + totalLosses);
  attempts = 0;

  //hiding the Reset button
  document.querySelector("#resetBtn").style.display = "none";

  //showing the Guess button
  document.querySelector("#guessBtn").style.display = "inline";

  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus(); //adding focus to textbox
  playerGuess.value = ""; //clearing the textbox

  let feedback = document.querySelector("#feedback");
  feedback.textContent = ""; //clearing the feedback
  feedback.style.padding = "0px";
  feedback.style.backgroundColor = "rgba(100,100,100,0.65)";

  //clearing previous guesses
  document.querySelector("#guesses").textContent = "";
} //function initializeGame

function checkGuess() {
  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";
  feedback.style.padding = "0px";
  let guess = document.querySelector("#playerGuess").value;
  console.log("Player guess: " + guess);
  if (guess <1 || guess > 99) {
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    feedback.style.padding = "10px";
    return;
  }
  attempts++;
  console.log("Attempts: " + attempts);
  feedback.style.color = "#905010";
  if (guess == randomNumber) {
    feedback.textContent = "You guessed it! You Won!";
    feedback.style.color = "darkgreen";
    feedback.style.padding = "10px";
    feedback.style.backgroundColor = "#ffffdd";
    totalWins++;
    gameOver();
  } else {
    document.querySelector("#guesses").textContent += guess + " | ";
    if (attempts == 7) {
      feedback.textContent = "Sorry, you lost! The correct number was " + randomNumber;
      feedback.style.color = "red";
      feedback.style.padding = "10px";
      feedback.style.backgroundColor = "#ffbbbb";
      totalLosses++;
      gameOver();
    } else if (guess > randomNumber) {
      feedback.textContent = "Guess was high. You have " + (7 - attempts) + " attempts left.";
      feedback.style.padding = "10px";
    } else {
      feedback.textContent = "Guess was low. You have " + (7 - attempts) + " attempts left.";
      feedback.style.padding = "10px";
    }
  }
} //function checkGuess

function gameOver() {
  let guessBtn = document.querySelector("#guessBtn");
  let resetBtn = document.querySelector("#resetBtn");
  let wins = document.querySelector("#wins");
  let losses = document.querySelector("#losses");
  guessBtn.style.display = "none";
  resetBtn.style.display = "inline";
  wins.textContent = totalWins;
  losses.textContent = totalLosses;
} //function gameOver
