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
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} & ${max}`, 'red');
    }
    // Check If Correct
    if (guess === winningNum) {
        // Game Won
        gameOver(true, `${winningNum} is correct, you win!`);
    } else {
        // Wrong Guess
        guessesLeft -= 1;
        // Check if GuessesLeft
        if (guessesLeft === 0) {
            // Lost
            gameOver(false, `Game Over! You Lost, the correct number was ${winningNum}`);
        } else {
            // Game Continue/ Wrong Guess
            setMessage(`Guess is incorrect, you have ${guessesLeft} guesses left!`);
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
        }
    }
});

// Game Over Function 
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green': color = 'red';   
    guessInput.disabled = true;
    // Change Border Color
    guessInput.style.borderColor = color;
    // Set Text Color
    message.style.color = 'green';
    // Let User Know Correct
    setMessage(msg);
}

// setMessage Function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}