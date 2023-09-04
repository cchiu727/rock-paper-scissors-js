/**
 * randomly return either 'Rock', 'Paper', or 'Scissors'
 */
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * 3)];
}

/**
 * return a string that declares the winner of the round
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 */
function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt('Enter your choice (Rock, Paper, Scissors)').toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            alert('Tied!');
            return 'tie';
        }
        else if (computerChoice === 'paper') {
            alert('You lost this round!');
            return 'computer';
        }
        else {
            alert('You won this round!');
            return 'player';
        }
    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            alert('You win this round!');
            return 'player';
        }
        else if (computerChoice === 'paper') {
            alert('Tied!');
            return 'tie';
        }
        else {
            alert('You lost this round!');
            return 'computer';
        }
    }
    else {
        if (computerChoice === 'rock') {
            alert('You lost this round!');
            return 'computer';
        }
        else if (computerChoice === 'paper') {
            alert('You won this round!');
            return 'player';
        }
        else {
            alert('Tied!');
            return 'tie';
        }
    }

    return 'tie';
}

/**
 * Play a 5 round game that keeps score and reports a winner or loser
 * at the end
 */
function game() {
    let winner;
    let playerScore = 0;
    let computerScore = 0;

    while (!winner) {
        let roundWinner = playRound();

        if (roundWinner === 'player') {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }
}

game();