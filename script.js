let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number from 1 to 100.";
    return;
  }

  attempts++;
  attemptsText.textContent = `Attempts: ${attempts}`;

  if (userGuess < secretNumber) {
    message.textContent = "Too low! Try a higher number.";
  } else if (userGuess > secretNumber) {
    message.textContent = "Too high! Try a lower number.";
  } else {
    message.textContent = `Correct guess! You won in ${attempts} attempts.`;
    checkButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = "";
  guessInput.focus();
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  guessInput.value = "";
  guessInput.disabled = false;
  checkButton.disabled = false;

  message.textContent = "New game started. Enter your guess!";
  attemptsText.textContent = "Attempts: 0";

  guessInput.focus();
}

checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});