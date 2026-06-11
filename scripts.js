let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let number = getRandomInt(3);
  if (number == 0) {
    return "rock";
  } else if (number == 1) {
    return "paper";
  } else if (number == 2) {
    return "scissors";
  }
}

function getHumanChoise() {
  let choise = prompt("What's your choise?");
  return choise.toLocaleLowerCase();
}

function playRound(humanChoise, computerChoise) {
  if (computerChoise === "paper") {
    if (humanChoise == "rock") {
      console.log("You Lose! Paper beats Rock.");
      computerScore++;
    } else if (humanChoise == "scissors") {
      console.log("You Win! Schissors beats Paper.");
      humanScore++;
    } else if (humanChoise == "paper") {
      console.log("You are equal! Paper cannot beat Paper.");
    }
  } else if (computerChoise === "rock") {
    if (humanChoise == "scissors") {
      console.log("You Lose! Rock beats Scissors.");
      computerScore++;
    } else if (humanChoise == "paper") {
      console.log("You Win! Paper beats Rock.");
      humanScore++;
    } else if (humanChoise == "rock") {
      console.log("You are equal! Rock cannot beat Rock.");
    }
  }
  if (computerChoise === "scissors") {
    if (humanChoise == "paper") {
      console.log("You Lose! Scissors beats Paper.");
      computerScore++;
    } else if (humanChoise == "rock") {
      console.log("You Win! Rock beats Schissors.");
      humanScore++;
    } else if (humanChoise == "scissors") {
      console.log("You are equal! Schissors cannot beat Schissors.");
    }
  }
}

function playGame() {
  playRound(getHumanChoise(), getComputerChoice());
  playRound(getHumanChoise(), getComputerChoice());
  playRound(getHumanChoise(), getComputerChoice());
  playRound(getHumanChoise(), getComputerChoice());
  playRound(getHumanChoise(), getComputerChoice());
  console.log("Human Score: " + humanScore);
  console.log("Computer Score: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You Win the Game!");
  } else {
    console.log("You Lose the Game!");
  }
}

playGame();
