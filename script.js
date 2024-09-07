//Generate a number between 1 and 3 (inclusive). Each number is mapped to either Rock, Paper, or Scissors.
//Side note: If you say Scissor, Paper, Rock instead you are sick in the head kek.

const fistType = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  switch (randomChoice) {
    case 1:
      return fistType[0];
      break;
    case 2:
      return fistType[1];
      break;
    case 3:
      return fistType[2];
      break;
    default:
      return "You fucked the math up bro";
  }
}

//Asks the presumably HUMAN player to select a choice
function getHumanChoice() {
  let c = prompt("Select a choice");
  switch (c.toLowerCase()) {
    case "1":
    case "rock":
    case "r":
      return fistType[0];
      break;
    case "2":
    case "paper":
    case "p":
      return fistType[1];
      break;
    case "3":
    case "scissors":
    case "s":
      return fistType[2];
      break;
    default:
      return null;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == null) return "That's not a legal option";

  if (humanChoice == computerChoice) {
    return `You picked ${humanChoice}. The computer picked ${computerChoice}. It's a tie`;
  }
  else if (humanChoice == "ROCK") {
    
  }
  else if (humanChoice == "PAPER") {

  }
  else if (humanChoice == "SCISSORS") {

  }
  return `You picked ${humanChoice}. The computer picked ${computerChoice}. WIP`;
}

let humanScore = 0;
let computerScore = 0;

while (true) {
  let test = playRound(getHumanChoice(), getComputerChoice());
  console.log(test);
}
