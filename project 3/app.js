/*
GAME FUNCTION:
    - Player must guess a number between a min and max.
    - Player gets a certain amount of guesses 
    - Notify player of guesser remaining
    - Notify the player of the correct answer if lose.
    - Let the player choose to play again
*/

// Game Values 
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Create EventListener for Button
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} & ${max}`, 'red');
    }
    // Check If Correct
    if (guess === winningNum){
        // Disable Input
        guessInput.disabled = true;
        // Change Border Color
        guessInput.style.borderColor = 'green';
        // Let User Know Correct
        setMessage(`${winningNum} is correct! You win!`, 'green');
    } else {

    }
});

// setMessage Function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}