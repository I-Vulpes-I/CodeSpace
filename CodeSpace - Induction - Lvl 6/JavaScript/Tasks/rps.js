const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
// Assinging variables to the choices made on the html.
// Assing different buttons and the result.

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
// addEventListener allows us to call the function playRound anytime a button is clicked.

function playRound(playerChoice) { // Creates function with player choice used to see who wins the game.
    const choices = ['rock', 'paper', 'scissors']; // Defining the choices in an array.
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Randomly chooses an option for the computer using math.
    // Math.floor rounds down and returns the largest integer less than or equal to a given number.
    // Math.random is used to return a random integer, in this case it is used to return a random element from the choices array for the computer to use in the game.
   
    // Determine the winner and update the resultDisplay with the outcome
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = 'It\'s a draw!';
        // This will update resultDisplay.
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
        // This block is comparing playerChoice to computerChoice and seeing who wins.
    ) {
        resultDisplay.textContent = 'You win!';
    } else {
        resultDisplay.textContent = 'Computer wins!';
    }
  }