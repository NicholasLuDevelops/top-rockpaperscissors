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
  }
  return "You fucked the math up bro";
}

//Asks the presumably HUMAN player to select a choice
function getHumanChoice(c) {
  switch (c) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

// console.log(getHumanChoice(4));