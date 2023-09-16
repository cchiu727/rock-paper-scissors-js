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
        updatePlayerScoreLabel(0);
        updateComputerScoreLabel(0);
    }

    updatePlayerScore(num = 1) {
        this.playerScore += num;
        console.log(`Player score: ${this.playerScore}`);
    }

    updateComputerScore(num = 1) {
        this.computerScore += num;
        console.log(`Computer score: ${this.computerScore}`);
    }

    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * 3)];
    }

    getPlayerChoice() {
        let playerChoice = prompt(`Enter your choice:
        1 - Rock
        2 - Paper
        3 - Scissors`);

        if (playerChoice) {
            if (playerChoice > 0 && playerChoice < 4) {
                return this.choices[playerChoice - 1];
            }
            else {
                alert('Invalid input, retry.');
                return this.getPlayerChoice();
            }
        }
        else if (playerChoice === '') {
            alert('Invalid input, retry.');
            this.getPlayerChoice();
        }
        else {
            alert('Invalid input, retry.');
            this.getPlayerChoice();
        }
    }

    playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                console.log(`Round ${this.rounds}: Tie`);
                return 'tie';
            }
            else if (computerSelection === 'paper') {
                console.log(`Round ${this.rounds}: Player loses`);
                return 'lose';
            }
            else {
                console.log(`Round ${this.rounds}: Player wins`);
                return 'win';
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                console.log(`Round ${this.rounds}: Player wins`);
                return 'win';
            }
            else if (computerSelection === 'paper') {
                console.log(`Round ${this.rounds}: Tie`);
                return 'tie';
            }
            else {
                console.log(`Round ${this.rounds}: Player loses`);
                return 'lose';
            }
        }
        else {
            if (computerSelection === 'rock') {
                console.log(`Round ${this.rounds}: Player loses`);
                return 'lose';
            }
            else if (computerSelection === 'paper') {
                console.log(`Round ${this.rounds}: Player wins`);
                return 'win';
            }
            else {
                console.log(`Round ${this.rounds}: Tie`);
                return 'tie';
            }
        }
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

        while (this.rounds < 5) {
            playerSelection = this.getPlayerChoice();
            computerSelection = this.getComputerChoice();

            winner = this.playRound(playerSelection, computerSelection);
            this.handleRoundEnd(winner);

            this.rounds++;
        }
    }
}