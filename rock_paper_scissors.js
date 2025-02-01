function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3) + 1
    if (compChoice == 1) {
        return "rock";
    } else if (compChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper, scissors):");
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        return "Your choice wasn't valid!";
    } else {
        return humanChoice;
    }
}

function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = String(humanChoice).toLowerCase(); // making human choice case isensetive
        if(humanChoice == "your choice wasn't valid!") {
            alert("Your choice wasn't valid!")
            return "ERROR: invalid choice!"
        }
        if (humanChoice === computerChoice) {
            return "draw";
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            return "You lose! paper beats rock";
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return "You win! rock beats scissors";
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            return "You lose! scissors beats paper";
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return "You win! paper beats rock!";
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return "You lose! rock beats scissors";
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return "You win! scissors beats paper";
        }
    }
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    console.log(`You:${humanScore} computer:${computerScore}`);
}

playGame(getHumanChoice(), getComputerChoice());


