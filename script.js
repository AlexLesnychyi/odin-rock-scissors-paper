

let humanScore = 0;
let computerScore = 0;


function getHumanChoice(choice) {
    
      if (choice === null || choice === undefined) {
        alert("No input provided. Try again.");
        return null;
    }
    let text= choice.toLowerCase()
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
function updaTedResults(message) {

    resultD.textContent = message + ` HumanScore= ${humanScore}  ComputerScore ${computerScore}`;
}
function checkWinner() {
    if (humanScore >= 5) {
        alert("Human wins the game!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}

 const container = document.querySelector("#container");
const rockBtn = document.createElement("button")
rockBtn.textContent = "Rock"
rockBtn.style.padding = "15px 10px"
rockBtn.style.backgroundColor = "red"
rockBtn.style.width= "100px"
const scsBtn = document.createElement("button")
scsBtn.textContent = "Scissors"
scsBtn.style.padding = "15px 10px"
scsBtn.style.backgroundColor = "green"
scsBtn.style.width= "100px"
const papBtn = document.createElement("button")
papBtn.textContent = "Paper"
papBtn.style.padding = "15px 10px"
papBtn.style.backgroundColor = "blue"
papBtn.style.width = "100px"
const resultD = document.querySelector("#result")
resultD.style.width = "300px"
resultD.style.height = "100px"
resultD.style.border = "3px solid"
resultD.textContent= " Let's Begin!"


container.append(rockBtn, scsBtn, papBtn, resultD)

rockBtn.addEventListener('click', (e) => {
    let choice = e.target.textContent
    let humanChoice = getHumanChoice(choice);
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    updaTedResults(result)
    checkWinner()
    
})
scsBtn.addEventListener('click', (e) => {
    let choice = e.target.textContent
    let humanChoice = getHumanChoice(choice);
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
     updaTedResults(result)
 checkWinner()
    })
papBtn.addEventListener('click', (e) => {
    let choice = e.target.textContent
    let humanChoice = getHumanChoice(choice);
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    updaTedResults(result);
    checkWinner()
   })
// function playGame(num) {
//     for (i = 0; i < num; i++) {
//       let humanChoice = getHumanChoice();
//         if (humanChoice === null) {
//             console.log("Game cancelled.");
//             return;
//         }
//         let computerChoice = getComputerChoice()
//         let result = playRound(humanChoice, computerChoice)
//         console.log(result)
//         console.log(`"computerScore" = ${computerScore}; "humanScore" = ${humanScore}`)
//     }
//     if (computerScore > humanScore) {
//         return `"Computer win! "${computerScore} ":" ${humanScore}`;
//     } else if (humanScore > computerScore)  {
//          return `"Human win! "${humanScore} ":" ${computerScore}`;
//     } else return "It's a Tie!"
       
// }

