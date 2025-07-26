function getComputerChoice() {
    let number = Math.floor(Math.random() * 100)
    if (number <= 33) {
        return "rock";
    } else if (number <= 66 && number > 33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let human = prompt("Rock, paper, scissors?", "");
    return human.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("You Win! Scissors beats Paper");
        ++humanScore;
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You Win! Paper beats Rock");
        ++humanScore;
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("You Win! Rock beats Scissors");
        ++humanScore;
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        console.log("You Lose! Scissors beats Paper")
        ++computerScore;
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        console.log("You Lose! Paper beats Rock");
        ++computerScore;
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        console.log("You Lose! Rock beats Scissors");
        ++computerScore;
    } else {
        console.log("It's a Draw!");
    }
}


function playGame() {
    for (let i = 0; i < 5; i ++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } if (humanScore > computerScore) {
        console.log(`You Win! ${humanScore} X ${computerScore}`)
    } else if (humanScore < computerScore){
        console.log(`You Lose! ${humanScore} X ${computerScore}`)
    } else {
        console.log(`It's a Draw! ${humanScore} X ${computerScore}`)
    }
}