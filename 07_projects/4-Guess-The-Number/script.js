let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
    // This function validate the guess i.e.. it should lie between 1 and 100 or it should be a number 
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
      } else if (guess < 1) {
        alert('PLease enter a number more than 1');
      } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
      } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
          displayGuess(guess);
          displayMessage(`Game Over. Random number was ${randomNumber}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
}

function checkGuess(guess){
    // This function checks that the user has guessed the right number or not
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
      }
}

function displayGuess(guess){
    // This function cleans the input field, update the previous guesses and remaining guesses
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    // This function is used to display message to the user that you have guessed the right number
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function newGame(){
    // This function starts a new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

function endGame(){
    // This function ends a game
    userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


