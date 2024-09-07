const fistType = ["ROCK", "PAPER", "SCISSOR"];

//Generate a number between 1 and 3 (inclusive). Each number is mapped to either rock, paper, or scissor.
//Side note: If you say Scissor, Paper, Rock instead you are sick in the head kek.
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
      return null;
  }
}

//Asks the presumably HUMAN player to select a choice between rock, paper, and scissor
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
    case "scissor":
    case "s":
      return fistType[2];
      break;
    default:
      return null;
  }
}

/**
 *
 * @param {*} humanChoice
 * @param {*} computerChoice
 * @returns
 */
function playRound(humanChoice, computerChoice) {
  let winMessage = `You picked ${humanChoice}. The computer picked ${computerChoice}. You Win`;
  let loseMessage = `You picked ${humanChoice}. The computer picked ${computerChoice}. You Lose`;

  //If player chooses an option not given.
  if (humanChoice == null || computerChoice == null)
    return "That's not a legal option";

  //If the player ties with the computers.
  if (humanChoice == computerChoice) {
    return `You picked ${humanChoice}. The computer picked ${computerChoice}. It's a tie`;
  }
  //Player picks ROCK
  else if (humanChoice == fistType[0]) {
    if (computerChoice == fistType[1]) return;
  }
  //Player picks PAPER
  else if (humanChoice == fistType[1]) {
  }
  //Player picks Scissors
  else if (humanChoice == fistType[2]) {
  }
}

let humanScore = 0;
let computerScore = 0;

while (true) {
  let test = playRound(getHumanChoice(), getComputerChoice());
  console.log(test);
}
