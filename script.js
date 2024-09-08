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
 * @returns Message on whether the player wins, loses, or entered an illegal choice
 *
 * 0 => ROCK
 * 1 => PAPER
 * 2 => SCISSOR
 */
function playRound(humanChoice, computerChoice) {
  //If player chooses an option not given.
  if (humanChoice == null || computerChoice == null) {
    return "That's not a legal option";
  }
  //If the player ties with the computers.
  else if (humanChoice == computerChoice) {
    return `You picked ${humanChoice}. The computer picked ${computerChoice}. It's a tie`;
  }
  // //Player picks ROCK
  // else if (humanChoice == fistType[0]) {
  //   //Computer Picks SCISSOR
  //   if (computerChoice == fistType[2]) return true;
  //   else return false;
  // }
  // //Player picks PAPER
  // else if (humanChoice == fistType[1]) {
  //   //Computer picks ROCK
  //   if (computerChoice == fistType[0]) return true;
  //   else return false;
  // }
  // //Player picks Scissors
  // else if (humanChoice == fistType[2]) {
  //   //Computer picks PAPER
  //   if (computerChoice == fistType[1]) return true;
  //   else return false;
  // }

  //Player picks ROCK
  else if (humanChoice == fistType[0]) {
    //Computer Picks SCISSOR
    return computerChoice == fistType[2] ? true : false;
  }
  //Player picks PAPER
  else if (humanChoice == fistType[1]) {
    //Computer picks ROCK
    return computerChoice == fistType[0] ? true : false;
  }
  //Player picks Scissors
  else if (humanChoice == fistType[2]) {
    //Computer picks PAPER
    return computerChoice == fistType[1] ? true : false;
  }
}

/**
 * Keeps score between human and computer and play until someone wins 5 games
 */
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // const humanSelection = getHumanChoice();
  // const computerSelection = getComputerChoice();

  // let winMessage = `You picked ${humanSelection}. The computer picked ${computerSelection}. You Win`;
  // let loseMessage = `You picked ${humanSelection}. The computer picked ${computerSelection}. You Lose`;

  while (humanScore != 5 && computerScore != 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let test = playRound(humanSelection, computerSelection);

    if (test == true) {
      console.log(
        `You picked ${humanSelection}. The computer picked ${computerSelection}. You Win`
      );
      humanScore++;
    } else if (test == false) {
      console.log(
        `You picked ${humanSelection}. The computer picked ${computerSelection}. You Lose`
      );
      computerScore++;
    } else {
      console.log(test);
    }

    console.log(`Score: 
    Player: ${humanScore}
    Computer: ${computerScore}`);
  }
}

playGame();
