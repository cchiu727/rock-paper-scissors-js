const playerScoreLabel = document.getElementById('player-score-label');
const computerScoreLabel = document.getElementById('computer-score-label');

const startGameBtn = document.getElementById('start-game-btn');

startGameBtn.addEventListener('click', startNewGame);

function startNewGame() {
    let currentGame = new RockPaperScissors();
    currentGame.play();
}

function updatePlayerScoreLabel(num) {
    playerScoreLabel.innerHTML = num;
}

function updateComputerScoreLabel(num) {
    computerScoreLabel.innerHTML = num;
}

class RockPaperScissors {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.rounds = 0;
    }

    getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];

        return choices[Math.floor(Math.random() * 3)];
    }

    playRound(playerSelection, computerSelection) {
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

    play() {
        this.playRound();
    }
}