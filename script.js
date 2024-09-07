//Generate a number between 1 and 3 (inclusive). Each number is mapped to either Rock, Paper, or Scissors.
//Side note: If you say Scissor, Paper, Rock instead you are sick in the head kek.
function getComputerChoice () {
    let randomChoice = (Math.random * 3) + 1;
    switch(randomChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}