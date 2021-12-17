// ROCK
// PAPER
// SCISSORS



let playerScore = 0;
let computerScore = 0;
let rounds = 0;



function display(Item, ID) {
    document.getElementById(ID).innerHTML = Item;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
switch (getRandomInt(3)) {
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
    }
}

function getPlayerChoice() {
    return window.prompt("Rock, Paper, Scissors?");
}

function gameRound() {
    switch (getPlayerChoice().toLowerCase()) {
        case "rock":
            switch (getComputerChoice()) {
                case "Rock":
                    console.log("TIE");
                    break;
                case "Paper":
                    console.log("LOSE");
                    computerScore ++;
                    break;
                case "Scissors":
                    console.log("WIN");
                    playerScore ++;
                    break;
                }
            break;        
        
        case "paper":
            switch (getComputerChoice()) {
                case "Rock":
                    console.log("WIN");
                    playerScore ++;
                    break;
                case "Paper":
                    console.log("TIE");
                    break;
                case "Scissors":
                    console.log("LOSE");
                    computerScore ++;
                    break;
                }
            break;
            
        case "scissors":
            switch (getComputerChoice()) {
                case "Rock":
                    console.log("LOSE");
                    computerScore ++;
                    break;
                case "Paper":
                    console.log("WIN");
                    playerScore ++;
                    break;
                case "Scissors":
                    console.log("TIE");
                    break;
                }
            break;
        
        default:
            console.log("error");
    }
}


//GAMELOOP

while (rounds < 5) {
    display(rounds + 1, "round");
    gameRound();
    display(playerScore, "playerScore");
    display(computerScore, "computerScore");
    rounds ++;
}

//GAMELOOP

function endScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("WINNNER!");
    }
    else if (playerScore < computerScore) {
        console.log("LOSER!");
    }
    else if ((playerScore === computerScore)) {
        console.log("TIE!");
    }
    else {
        console.log("Scoring error!");
    }
}

console.log("PLAYER: " + playerScore);
console.log ("COMPUTER: " + computerScore);
endScore(playerScore, computerScore);                   


