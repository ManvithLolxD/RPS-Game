if (user == comp) {
  console.log("Draw");
} else if (
  (user == "rock" && comp == "scissors") ||
  (user == "paper" && comp == "rock") ||
  (user == "scissors" && comp == "paper")
) {
  console.log("You win");
} else {
  console.log("You lose");
}
