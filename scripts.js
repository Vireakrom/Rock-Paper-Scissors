let humanScore = 0;
let computerScore = 0;
let gameCount = 0;
let resultText;

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

function playRound(humanChoise, computerChoise) {
  if (computerChoise === "paper") {
    if (humanChoise == "rock") {
      resultText = "You Lose! Paper beats Rock.";
      computerScore++;
    } else if (humanChoise == "scissors") {
      resultText = "You Win! Schissors beats Paper.";
      humanScore++;
    } else if (humanChoise == "paper") {
      resultText = "You are equal! Paper cannot beat Paper.";
    }
  } else if (computerChoise === "rock") {
    if (humanChoise == "scissors") {
      resultText = "You Lose! Rock beats Scissors.";
      computerScore++;
    } else if (humanChoise == "paper") {
      resultText = "You Win! Paper beats Rock.";
      humanScore++;
    } else if (humanChoise == "rock") {
      resultText = "You are equal! Rock cannot beat Rock.";
    }
  } else if (computerChoise === "scissors") {
    if (humanChoise == "paper") {
      resultText = "You Lose! Scissors beats Paper.";
      computerScore++;
    } else if (humanChoise == "rock") {
      resultText = "You Win! Rock beats Schissors.";
      humanScore++;
    } else if (humanChoise == "scissors") {
      resultText = "You are equal! Schissors cannot beat Schissors.";
    }
  }
  gameCount++;
}

function playGame(humanChoise) {
  playRound(humanChoise, getComputerChoice());
  let computerScoreText = document.querySelector("#pcScore");
  let humanScoreText = document.querySelector("#personScore");
  let winner = document.querySelector("#winner");

  humanScoreText.textContent = "Your Score: " + humanScore;
  computerScoreText.textContent = "Computer Score: " + computerScore;

  if (computerScore == 5) {
    winner.textContent = "Computer Win!!!";
    winner.setAttribute("style", "color: red;");
  } else if (humanScore == 5) {
    winner.textContent = "You Win!!!";
    winner.setAttribute("style", "color: blue;");
  } else {
    winner.textContent = resultText;
    winner.setAttribute("style", "color: black;");
  }
  if (computerScore == 5 || humanScore == 5) {
    humanScore = 0;
    computerScore = 0;
    gameCount = 0;
  }
}

let rock = document.querySelector("#btn1");
let paper = document.querySelector("#btn2");
let scissors = document.querySelector("#btn3");

rock.addEventListener("click", () => {
  playGame("rock");
});
paper.addEventListener("click", () => {
  playGame("paper");
});
scissors.addEventListener("click", () => {
  playGame("scissors");
});

if (computerScore == 5) {
}
