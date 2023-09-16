const playerScoreLabel = document.getElementById('player-score-label');
const computerScoreLabel = document.getElementById('computer-score-label');

const startGameBtn = document.getElementById('start-game-btn');
startGameBtn.addEventListener('click', startNewGame);

function updatePlayerScoreLabel(num) {
    playerScoreLabel.innerHTML = num;
}

function updateComputerScoreLabel(num) {
    computerScoreLabel.innerHTML = num;
}

function startNewGame() {
    const currentGame = new RockPaperScissors();
    currentGame.play();
}

class RockPaperScissors {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.rounds = 0;
        this.choices = ['rock', 'paper', 'scissors'];
    }

    updatePlayerScore(num=1) {
        this.playerScore += num;
    }

    updateComputerScore(num=1) {
        this.playerScore += num;
    }

    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * 3)];
    }

    getPlayerChoice() {
        let playerChoice = prompt(`Enter your choice:
        1 - Rock
        2 - Paper
        3 - Scissors
        `);

        return this.choices[playerChoice - 1];
    }

    playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                return 'tie';
            }
            else if (computerSelection === 'paper') {
                return 'lose';
            }
            else {
                return 'win';
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                return 'win';
            }
            else if (computerSelection === 'paper') {
                return 'tie';
            }
            else {
                return 'lose';
            }
        }
        else {
            if (computerSelection === 'rock') {
                return 'lose';
            }
            else if (computerSelection === 'paper') {
                return 'win';
            }
            else {
                return 'tie';
            }
        }

        return 'tie';
    }

    handleRoundEnd(result) {
        if (result === 'win') {
            this.updatePlayerScore();
            updatePlayerScoreLabel(this.playerScore);
        }
        else if (result === 'lose') {
            this.updateComputerScore();
            updateComputerScoreLabel(this.computerScore);
        }
    }

    play() {
        let playerSelection;
        let computerSelection;
        let winner;

        while (this.rounds < 6) {
            playerSelection = this.getPlayerChoice();
            computerSelection = this.getComputerChoice();

            winner = this.playRound(playerSelection, computerSelection);
            this.handleRoundEnd(winner);

            this.rounds++;
        }
    }
}