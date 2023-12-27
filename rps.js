let user;
let computer;
let r = document.getElementById("r");
let p = document.getElementById("p");
let s = document.getElementById("s");
let res = document.getElementById("res");
let compScore = document.getElementById("compScore");
let userScore = document.getElementById("userScore");

r.addEventListener("click", function () {
  user = "Rock";
  console.log(result(user, compchoice()));
});
p.addEventListener("click", function () {
  user = "Paper";
  console.log(result(user, compchoice()));
});
s.addEventListener("click", function () {
  user = "Scissor";
  console.log(result(user, compchoice()));
});

//Computers Choice
function compchoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return (comp = "Rock");
    case 2:
      return (comp = "Paper");

    case 3:
      return (comp = "Scissor");
  }
}

function result(user, comp) {
  if (user == comp) {
    console.log("Draw");
  } else if (
    (user == "Rock" && comp == "Scissor") ||
    (user == "Paper" && comp == "Rock") ||
    (user == "Scissor" && comp == "Paper")
  ) {
    console.log("You win");
  } else {
    console.log("You lose");
  }
}
