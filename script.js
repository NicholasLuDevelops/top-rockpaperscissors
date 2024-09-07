//Generate a number between 1 and 3 (inclusive). Each number is mapped to either Rock, Paper, or Scissors.
//Side note: If you say Scissor, Paper, Rock instead you are sick in the head kek.
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  switch (randomChoice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
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
      return "Rock";
      break;
    case "2":
    case "paper":
    case "p":
      return "Paper";
      break;
    case "3":
    case "scissors":
    case "s":
      return "Scissors";
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
  return `You picked ${humanChoice}. The computer picked ${computerChoice}. WIP`;
}

let humanScore = 0;
let computerScore = 0;

while (true) {
  let test = playRound(getHumanChoice(), getComputerChoice());
  console.log(test);
}
