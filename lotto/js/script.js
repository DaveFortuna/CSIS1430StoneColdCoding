do {
  var question = prompt("How many lotto tries would you like? (max:8):");
  if (question > 8) {
    alert("Bad number, try again :)");
  }
} while (question > 8);

var lottery = [];
var lotNumbers = "";

// fill lottery array
for (var i = 0; i < question; i++) {
  lottery[i] = Math.ceil(Math.random() * 100);
}
//Display lottery numbers/array
for (var i = 0; i < lottery.length; i++) {
  lotNumbers += lottery[i];
}

var lotNumbers = lottery.join("-");

var body = document.getElementById("lotto").innerHTML;
document.getElementById("lotto").innerHTML = lotNumbers;

function shuffle() {
  for (var i = 0; i < question; i++) {
    lottery[i] = Math.ceil(Math.random() * 100);
  }
  //Display lottery numbers/array
  for (var i = 0; i < lottery.length; i++) {
    lotNumbers += lottery[i];
  }

  var lotNumbers = lottery.join("-");

  var body = document.getElementById("lotto").innerHTML;
  document.getElementById("lotto").innerHTML = lotNumbers;
}
