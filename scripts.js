
function getComputerChoice() {
    let npcChoice = undefined;
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum) {
        case 1:
            npcChoice = "Rock"; 
            break;
        case 2:
            npcChoice = "Paper" ;
            break;
        case 3:
        npcChoice = "Scissors" ;
        break;
    }
    return npcChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "Paper") {
        return("You Lose! Paper beats Rock!");
    }
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return("You Win! Rock beats Scissors!");
    }

    if (playerSelection === "paper" && computerSelection === "Scissors") {
        return("You Lose! Scissors beats Paper!");
    }
    if (playerSelection === "paper" && computerSelection === "Rock") {
        return("You Win! Paper beats Rock!");
    }

    if (playerSelection === "scissors" && computerSelection === "Rock") {
        return("You Lose! Rock beats Scissors!");
    }
    if (playerSelection === "scissors" && computerSelection === "Paper") {
        return("You Win! Scissors beats Paper!");
    } 
    else {
        return(`Draw! ${playerSelection} is equally matched to ${computerSelection}`);
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));   
    }
}

console.log(game());
