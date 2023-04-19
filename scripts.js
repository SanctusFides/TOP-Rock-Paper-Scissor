
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


function playRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return("You Lose! Paper beats Rock!");
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return("You Win! Rock beats Scissors!");
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return("You Lose! Scissors beats Paper!");
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return("You Win! Paper beats Rock!");
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return("You Lose! Rock beats Scissors!");
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return("You Win! Scissors beats Paper!");
    } 
    else {
        return(`Draw! ${playerSelection} is equally matched to ${computerSelection}`);
    }
}

function game() {

    //Keeps track of player score
    const score = document.getElementById("score");
    let myWins = 0;
    score.innerHTML = myWins;
    
    //Keeps track of player score
    const npcScore = document.getElementById("npcscore");
    let npcWins = 0;
    npcScore.innerHTML = npcWins;

    //For displaying the result of each round
    let results = document.querySelector('#results');
    results.textContent = "Good Luck!"

    // checks to see if either player has reached 5 points for victory
    function winCheck() {
        if (myWins === 5) {
            alert(results.textContent = 'Congrats, you win!');
        } else if (npcWins === 5) {
            alert(results.textContent = 'You lose! Better luck next time!');
        } else {
            return;
        }
    }
    

    // Logic block for Paper button
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener('click', () => {
        let npcChoice = getComputerChoice();
        let matchResult = playRound("Rock", npcChoice);
        results.textContent = matchResult;
        if (matchResult.startsWith('You Win!')) {
            myWins++;
            score.innerHTML = myWins;
            winCheck()
        } else if (matchResult.startsWith('You Lose!')) {
            npcWins++;
            npcScore.innerHTML = npcWins;
            winCheck()
        } else {
            return;
        }
    })

    // Logic block for Paper button
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener('click', () => {
        let npcChoice = getComputerChoice();
        let matchResult = playRound("Paper", npcChoice);
        results.textContent = matchResult;        
        if (matchResult.startsWith('You Win!')) {
            myWins++;
            score.innerHTML = myWins;
            winCheck()
        } else if (matchResult.startsWith('You Lose!')) {
            npcWins++;
            npcScore.innerHTML = npcWins;
            winCheck()
        } else {
            return;
        }
    })

    // Logic block for Scissors button
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener('click', () => {
        let npcChoice = getComputerChoice();
        let matchResult = playRound("Scissors", npcChoice);
        results.textContent = matchResult;
        if (matchResult.startsWith('You Win!')) {
            myWins++;
            score.innerHTML = myWins;
            winCheck()
        } else if (matchResult.startsWith('You Lose!')) {
            npcWins++;
            npcScore.innerHTML = npcWins;
            winCheck()
        } else {
            return;
        }
    })

    // Logic block to reset the scores and the text in the result box
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
        myWins = 0;
        npcWins = 0;
        score.innerHTML = myWins;
        npcScore.innerHTML = npcWins;
        results.textContent = "";

    })
}

console.log(game());
