// get names for players
var names = ["", ""];
names[0] = prompt("Player1: ");
document.getElementById("pname0").innerHTML = names[0];
names[1] = prompt("Player2: ");
document.getElementById("pname1").innerHTML = names[1];

//make grid squares clickable with X, O
var markers = ["X", "O"];

var whoseTurn = 0;
var totals = [0, 0];
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var boxNum = [1, 2, 4, 8, 16, 32, 64, 128, 256];
var scoreBoard = [0, 0];
var tie = 0;

document.getElementById("turnBanner").innerHTML =
  names[whoseTurn] + ", make a move!";

function playGame(clicked, divValue) {
  clicked.innerText = markers[whoseTurn];
  totals[whoseTurn] += divValue;
  console.log(totals);
  // check for winner
  if (isWinner()) {
    document.getElementById("headLine").innerText = names[whoseTurn] + " wins!";
    scoreBoard[whoseTurn]++;
    document.getElementById("win" + whoseTurn).innerText =
      "Win: " + scoreBoard[whoseTurn];
    document.getElementById("replay").classList.remove("hide");
    document.getElementById("turnBanner").innerText =
      names[whoseTurn] + ", well played!";

    for (x = 0; x < 9; x++) {
      document.getElementById(x).removeAttribute("onclick");
    }
  }
  // check for tie
  else if (totals[0] + totals[1] == 511) {
    document.getElementById("headLine").innerText = "Cat's game!";
    document.getElementById("turnBanner").innerText = "It's a tie!";
    var mySound = new Audio("audio/cat.wav");
    mySound.play();
    tie++;
    document.getElementById("tie0").innerText = "Tie: " + tie;
    document.getElementById("tie1").innerText = "Tie: " + tie;
    document.getElementById("replay").classList.remove("hide");

    for (x = 0; x < 9; x++) {
      document.getElementById(x).removeAttribute("onclick");
    }
  } else {
    document.getElementById("score0").classList.toggle("pTurn");
    document.getElementById("score1").classList.toggle("pTurn");
    clicked.removeAttribute("onclick");
    if (whoseTurn) whoseTurn = 0;
    else whoseTurn = 1;
    document.getElementById("turnBanner").innerHTML =
      names[whoseTurn] + " make a move!";
  }
}

function isWinner() {
  for (i = 0; i < winCodes.length; i++) {
    if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) {
      var mySound = new Audio("audio/win.wav");
      mySound.play();
      return true;
    }
  }
  return false;
}

function rematch() {
  for (x = 0; x < 9; x++) {
    document.getElementById(x).innerText = "";
    document
      .getElementById(x)
      .setAttribute("onclick", "playGame(this, " + boxNum[x] + ")");
  }

  totals = [0, 0];
  whoseTurn = 0;
  document.getElementById("replay").classList.add("hide");
  document.getElementById("headLine").innerText = "Tic Tac Toe";
  document.getElementById("turnBanner").innerHTML =
    names[whoseTurn] + ", make a move!";
  document.getElementById("score0").classList.add("pTurn");
  document.getElementById("score1").classList.remove("pTurn");
}
