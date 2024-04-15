let random = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
let remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    console.log(`Enter a Valid Number`);
  } else if (guess < 1 || guess > 100) {
    console.log(`Enter the number between 1 to 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Your Game is Over and Random Number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == random) {
    displayMessage(`You WON the game`);
    endGame();
  } else if (guess > random) {
    displayMessage(`Number is high`);
  } else displayMessage(`Number is low`);
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    userInput.value = '';
    numGuess = 1;
    random = Math.round(Math.random() * 100 + 1);
    remainingGuesses.innerHTML = `${11 - numGuess}`;
    prevGuess = [];
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}