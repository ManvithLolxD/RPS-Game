let r = document.getElementById("r");
let p = document.getElementById("p");
let s = document.getElementById("s");
r.addEventListener("click", function () {
  console.log("Element has been clicked");
});

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
