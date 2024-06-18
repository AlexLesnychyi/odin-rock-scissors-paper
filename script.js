

let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
    let userChoice = prompt("Type your choice!")
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
        return "It's a Tie!!!";
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
               (humanChoice === "Scissors" && computerChoice === "Paper") ||
               (humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore++;
        return `Congratulations Human wins! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `Congratulations Computer wins! ${computerChoice} beats ${humanChoice}`;
    }
}


function playGame(num) {
    for (i = 0; i < num; i++) {
      let humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game cancelled.");
            return;
        }
        let computerChoice = getComputerChoice()
        let result = playRound(humanChoice, computerChoice)
        console.log(result)
        console.log(`"computerScore" = ${computerScore}; "humanScore" = ${humanScore}`)
    }
    if (computerScore > humanScore) {
        return `"Computer win! "${computerScore} ":" ${humanScore}`;
    } else if (humanScore > computerScore)  {
         return `"Human win! "${humanScore} ":" ${computerScore}`;
    } else return "It's a Tie!"
       
   
}

