
let userChoice = prompt("type your choice!")
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice(userChoice);
const computerSelection = getComputerChoice();
function getHumanChoice(userChoice) {
      if (userChoice === null || userChoice === undefined) {
        alert("No input provided. Try again.");
        return null;
    }
    let text= userChoice.toLowerCase()
    if (text === "rock") {
        return "Rock";
    } else if (text === "scissors") {
            return "Scissors"
    }
    else if (text === "paper") {
        return "Paper"
    } else  alert("WRONG INPUT TRY AGAIN")
    return null;
}
function getComputerChoice() {
    let num = Math.round(Math.random() * 100);
    if (num <= 33) {
        return "Rock";
    } else if (num > 33 && num <= 66) {
        return "Scissors";
    } else { return "Paper" }
}
function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!!!");
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
               (humanChoice === "Scissors" && computerChoice === "Paper") ||
               (humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore++;
        console.log(`Congratulations Human wins! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Congratulations Computer wins! ${computerChoice} beats ${humanChoice}`);
    }
}
playRound(humanSelection,computerSelection)


function playGame() {

}

