
 const userBoard = document.getElementById('user-score');
 const computerBoard = document.getElementById('computer-score');

const computerIcon = document.getElementById('computerChoice');
const userIcon = document.getElementById('userChoice');
const winner = document.getElementById('winner');

 let userScore = 0;
 let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerIcon.className = "fa fa-hand-rock";
            return 'rock';
            break;
        case 1:
            computerIcon.className = "fa fa-hand-scissors";
            return 'scissor';
            break;
        case 2:
            computerIcon.className = "fa fa-hand-paper";
            return 'paper';
            break;
    }
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        userIcon.className = "fa fa-hand-" + userChoice;
        return 'the game was a tie.';
    }
    else {
        if (userChoice === 'rock') {
            if (computerChoice === 'scissor') {
                userScore++;
                userIcon.className = "fa fa-hand-rock";
                return 'You win!';
            }
            else {
                computerScore++;
                return 'the computer win!';
            }
        }
        else if (userChoice === 'scissor') {
            if (computerChoice === 'paper') {
               userScore++;
                userIcon.className = "fa fa-hand-scissors";
                return 'you win!';
            }
            else {
                computerScore++;
                return 'the computer win!';
            }
        }
        else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                userScore++;
                userIcon.className = "fa fa-hand-paper";
                return 'you win!';
            }
            else {
                computerScore++;
                return 'computer win!';
            }
        }

    }
}


const game = function (userChoice) {
    let computerChoice = getComputerChoice();
    updatewinner(determineWinner(userChoice, computerChoice));
};

const updatewinner = (win) => {
    winner.innerHTML = win;
     userBoard.innerHTML = userScore;
     computerBoard.innerHTML = computerScore;
}

//////////////////////////////////////  Water Fire Wood  ///////////////////////////////////////////////

function theComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerIcon.className = "fa fa-water";
            return 'water';
            break;
        case 1:
            computerIcon.className = "fa fa-fire";
            return 'fire';
            break;
        case 2:
            computerIcon.className = "fa fa-tree";
            return 'wood';
            break;
    }
}



function thewinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        userIcon.className = "fa fa-" + userChoice;
        return 'the game was a tie.';
    }
    else {
        if (userChoice === 'water') {
            if (computerChoice === 'fire') {
                userScore++;
                userIcon.className = "fa fa-water";
                return 'you win!';
            }
            else {
                computerScore++;
                return 'the computer win!';
            }
        }
        else if (userChoice === 'fire') {
            if (computerChoice === 'wood') {
                userScore++;
                userIcon.className = "fa fa-hand-fire";
                return 'you win!';
            }
            else {
                computerScore++;
                return 'the computer win!';
            }
        }
        else if (userChoice === 'wood') {
            if (computerChoice === 'water') {
                userScore++;
                userIcon.className = "fa fa-hand-wood";
                return 'you win!';
            }
            else {
                computerScore++;
                return 'computer win!';
            }
        }

    }
} 

const game2 = function (userChoice) {
    let computerChoice = theComputerChoice();
    newwinner(thewinner(userChoice, computerChoice));
};

const newwinner = (win) => {
    winner.innerHTML = win;
     userBoard.innerHTML = userScore;
     computerBoard.innerHTML = computerScore;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

function replaceGame() {

    document.getElementById("rps").style.display = "none";
    document.getElementById("wfw").style.display = "block";
    document.getElementById("rpsBtn").style.display = "none";
    document.getElementById("wfwBtn").style.display = "inline-block";
}

function backForGame() {
    document.getElementById("wfw").style.display = "none";
    document.getElementById("rps").style.display = "block";
    document.getElementById("rpsBtn").style.display = "inline-block";
    document.getElementById("wfwBtn").style.display = "none";
}
