let userPoint = 0;
let compPoint = 0;
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
  console.log(user, comp);
  if (user == comp) {
    res.innerHTML = `Computer picked ${comp}. It's a DRAW!`;
  } else if (
    (user == "Rock" && comp == "Scissor") ||
    (user == "Paper" && comp == "Rock") ||
    (user == "Scissor" && comp == "Paper")
  ) {
    res.innerHTML = `Computer picked ${comp}. You WIN!`;
    userScore.innerHTML = userPoint++;
  } else {
    res.innerHTML = `Computer picked ${comp}. You LOSE! `;
    compScore.innerHTML = compPoint++;
  }
}
