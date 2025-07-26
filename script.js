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
    if ((humanChoice = "scissors") && (computerChoice = "paper")) {
        console.log("You Win! Scissors beats Paper");
        return ++humanChoice
    } else if ((humanChoice = "paper") && (computerChoice = "rock")) {
        console.log("You Win! Paper beats Rock");
        return ++humanChoice
    } else if ((humanChoice = "rock") && (computerChoice = "scissors")) {
        console.log("You Win! Rock beats Scissors");
        return ++humanChoice
    } else if ((humanChoice = "paper") && (computerChoice = "scissors")) {
        console.log("You Lose! Scissors beats Paper")
        return ++computerChoice
    } else if ((humanChoice = "rock") && (computerChoice = "paper")) {
        console.log("You Lose! Paper beats Rock");
        return ++computerChoice
    } else if ((humanChoice = "scissors") && (computerChoice = "rock")) {
        console.log("You Lose! Rock beats Scissors");
        return ++computerChoice
    } else {
        console.log("It's a Draw!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);