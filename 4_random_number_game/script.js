let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
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
    valiadteGuess(guess);
  });
}

function valiadteGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter the valid number');
  } else if (guess < 1) {
    alert('please enter the number greter than 0');
  } else if (guess > 100) {
    alert('please enter the number less than hundred');
  } else {
    prevGuess.push(guess); //values ko array m push karva di
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over.  Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`ENTERED NUMBER IS SMALLER THAN RANDOM NUMBER`);
  } else if (guess > randomNumber) {
    displayMessage(`ENTERED NUMBER IS GREATER THAN RANDOM NUMBER`);
    
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame"> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = (document.querySelector("#newgame"))
  newGameButton.addEventListener('click', function (e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame = true


  })

}
