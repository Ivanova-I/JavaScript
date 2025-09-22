const choices = ['rock', 'paper', 'scissors'];

const input = prompt("Choose rock, paper or scissors:");
if (input === null) {
  console.log("You pressed cancel.");
} else {
  const userChoice = input.toLowerCase().trim();
  
  if (!choices.includes(userChoice)) {
    console.log("Invalid input. Please type rock, paper or scissors.");
  } else {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    console.log("You chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }
}


