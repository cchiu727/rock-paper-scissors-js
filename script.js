class Winner {
    constructor(element) {
        this.winnerLabel = element;
    }

    updateWinnerLabel(text) {
        this.winnerLabel.textContent = text;
    }
}

class Score {
    constructor(element) {
        this.scoreLabel = element;
        this.scoreValue = 0;
    }

    updateScore(num=1) {
        this.scoreValue += num;
    }

    updateScoreLabel() {
        this.scoreLabel.textContent = this.scoreValue;
    }
}

class Choice {
    constructor(element, value) {
        this.button = element;
        this.value = value;
    }
}

class RockPaperScissors {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors'];
        this.rounds = 0;
    }

    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * 3)];
    }

    playRound(playerSelection, computerSelection) {
        this.rounds++;

        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                console.log(`Round ${this.rounds}: Tie`);
                winner.updateWinnerLabel('Tie!');
            }
            else if (computerSelection === 'paper') {
                console.log(`Round ${this.rounds}: Player loses`);
                computerScore.updateScore();
                computerScore.updateScoreLabel();
                winner.updateWinnerLabel('Computer wins!');
            }
            else {
                console.log(`Round ${this.rounds}: Player wins`);
                playerScore.updateScore();
                playerScore.updateScoreLabel();
                winner.updateWinnerLabel('Player wins!');
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                console.log(`Round ${this.rounds}: Player wins`);
                playerScore.updateScore();
                playerScore.updateScoreLabel();
                winner.updateWinnerLabel('Player wins!');
            }
            else if (computerSelection === 'paper') {
                console.log(`Round ${this.rounds}: Tie`);
                winner.updateWinnerLabel('Tie!');

            }
            else {
                console.log(`Round ${this.rounds}: Player loses`);
                computerScore.updateScore();
                computerScore.updateScoreLabel();
                winner.updateWinnerLabel('Computer wins!');
            }
        }
        else {
            if (computerSelection === 'rock') {
                console.log(`Round ${this.rounds}: Player loses`);
                computerScore.updateScore();
                computerScore.updateScoreLabel();
                winner.updateWinnerLabel('Computer wins!');
            }
            else if (computerSelection === 'paper') {
                console.log(`Round ${this.rounds}: Player wins`);
                playerScore.updateScore();
                playerScore.updateScoreLabel();
                winner.updateWinnerLabel('Player wins!');
            }
            else {
                console.log(`Round ${this.rounds}: Tie`);
                winner.updateWinnerLabel('Tie!');
            }
        }
    }
}

const playerScore = new Score(document.getElementById('player-score-label'));
const computerScore = new Score(document.getElementById('computer-score-label'));

const winner = new Winner(document.getElementById('winner-label'));

const choiceRockBtn = document.getElementById('choice-rock-btn');
const choicePaperBtn = document.getElementById('choice-paper-btn');
const choiceScissorsBtn = document.getElementById('choice-scissors-btn');

const game = new RockPaperScissors(playerScore, computerScore);

choiceRockBtn.addEventListener('click', () => {
    game.playRound('rock', game.getComputerChoice());
});

choicePaperBtn.addEventListener('click', () => {
    game.playRound('paper', game.getComputerChoice());
});

choiceScissorsBtn.addEventListener('click', () => {
    game.playRound('scissors', game.getComputerChoice());
});