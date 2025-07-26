function getComputerChoice() {
    let number = Math.floor(Math.random() * 100)
    if (number<=33) {
        return "rock"
    } else if (number<=66 && number>33) {
        return "paper"
    } else {
        return "scissors"
    }
}