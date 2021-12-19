// ROCK
// PAPER
// SCISSORS



let playerScore = 0;
let computerScore = 0;
let round = 1;
//let maxRounds = 5;



function display(Item, ID) {
    document.getElementById(ID).innerText = Item;
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
    };
};

function gameRound(playerChoise) {
    switch (playerChoise) {
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
    };
};

function endScore() {
    if (playerScore > computerScore) {
        window.alert("WINNNER!");
    }
    else if (playerScore < computerScore) {
        window.alert("LOSER!");
    }
    else if ((playerScore === computerScore)) {
        window.alert("TIE!");
    }
    else {
        window.alert("Scoring error!");
    };
};
              
const refresh = () => {
    display(round, "round");
    display(playerScore, "playerScore");
    display(computerScore, "computerScore");    
} 

const calcWinner = () => {
    if (playerScore == 5 || computerScore == 5) {
        endScore();
        restart();
    };
};

const restart = () => {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    refresh();
};



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        gameRound(button.id);
        round += 1;
        refresh();
        calcWinner();
    });

});



refresh();


