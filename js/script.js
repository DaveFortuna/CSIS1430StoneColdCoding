var x = 0;

function quoteChange() {
  switch (x) {
    case 0:
      document.getElementById("quote").innerText =
        "Be yourself; everyone else is already taken. ~Oscar Wilde";
      break;
    case 1:
      document.getElementById("quote").innerText =
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ~ Bernard M. Baruch";
      break;
    case 2:
      document.getElementById("quote").innerHTML =
        "When in doubt, look intelligent.<br> ~ Garrison Keillor ";
      break;
    case 3:
      document.getElementById("quote").innerText =
        "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. ~ Bill Keane";
      break;
    case 4:
      document.getElementById("quote").innerText =
        "I have not failed. I've just found 10,000 ways that won't work. ~ Thomas A. Edison";
      break;
  }

  x = (x + 1) % 5;
}

function play() {
  var audio = new Audio("sound/turnPage.mp3");
  audio.play();
}
