
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

let counter = 0;

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    counter++;
    if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        results.textContent = "You Win! Scissors beats Paper";
        ++humanScore;
        gameResult.textContent = `${humanScore} X ${computerScore}`;
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        results.textContent = "You Win! Paper beats Rock";
        ++humanScore;
        gameResult.textContent = `${humanScore} X ${computerScore}`;
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        results.textContent = "You Win! Rock beats Scissors";
        ++humanScore;
        gameResult.textContent = `${humanScore} X ${computerScore}`;
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        results.textContent = "You Lose! Scissors beats Paper"
        ++computerScore;
        gameResult.textContent = `${humanScore} X ${computerScore}`;
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        results.textContent = "You Lose! Paper beats Rock";
        ++computerScore;
        gameResult.textContent = `${humanScore} X ${computerScore}`;
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        results.textContent = "You Lose! Rock beats Scissors";
        ++computerScore;
        gameResult.textContent = `${humanScore} X ${computerScore}`;
    } else {
        results.textContent = "It's a Draw!";
    }
}


// function playGame() {
//    for (let i = 0; i < 5; i ++) {
//        const humanSelection = getHumanChoice();
//        const computerSelection = getComputerChoice();
//        playRound(humanSelection, computerSelection);
//    } if (humanScore > computerScore) {
//        console.log(`You Win! ${humanScore} X ${computerScore}`)
//    } else if (humanScore < computerScore){
//        console.log(`You Lose! ${humanScore} X ${computerScore}`)
//    } else {
//        console.log(`It's a Draw! ${humanScore} X ${computerScore}`)
//    }
//}

const buttonDiv = document.createElement("div");
buttonDiv.className = "btnDiv"
document.body.appendChild(buttonDiv);

const rock = document.createElement("button");
rock.className = "btn";
rock.textContent = "👊";

const paper = document.createElement("button");
paper.className = "btn";
paper.textContent = "✋";

const scissors = document.createElement("button");
scissors.className = "btn";
scissors.textContent = "✌️";

buttonDiv.appendChild(rock);
buttonDiv.appendChild(paper);
buttonDiv.appendChild(scissors);

buttonDiv.addEventListener('click', (event) => {
    let target = event.target;
    const computerSelection = getComputerChoice();

    switch (target) {
        case rock:
            playRound("rock", computerSelection)
            gameCheck();
            break;
        case paper:
            playRound("paper", computerSelection)
            gameCheck();
            break;
        case scissors:
            playRound("scissors", computerSelection)
            gameCheck();
            break;
    }
});

const results = document.createElement("div");

document.body.appendChild(results)

const btn = document.querySelectorAll("button.btn");

const gameResult = document.createElement("div");
document.body.appendChild(gameResult)

function gameCheck() {
    if (counter === 5) {
    if (humanScore > computerScore) {
        gameResult.textContent = `You Win! ${humanScore} X ${computerScore}`;
    } else if (humanScore < computerScore) {
        gameResult.textContent = `You Lose! ${humanScore} X ${computerScore}`;
    } else {
        gameResult.textContent = `It's a Draw! ${humanScore} X ${computerScore}`;
    }
    counter = 0;
    humanScore = 0;
    computerScore = 0;    
 }
}













