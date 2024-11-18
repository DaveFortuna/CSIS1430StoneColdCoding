//get input from the user

function getValue() {
  for (x = 1; x <= 4; x++) {
    var userInput = document.getElementById("noun" + x).value;
    document.getElementById("n" + x).innerHTML = userInput;

    userInput = document.getElementById("pluralNoun" + x).value;
    document.getElementById("pn" + x).innerHTML = userInput;

    if (x <= 2) {
      userInput = document.getElementById("ing" + x).value;
      document.getElementById("ing" + x).innerHTML = userInput;

      userInput = document.getElementById("adjective" + x).value;
      document.getElementById("a" + x).innerHTML = userInput;

      userInput = document.getElementById("number" + x).value;
      document.getElementById("num" + x).innerHTML = userInput;

      userInput = document.getElementById("verb" + x).value;
      document.getElementById("v" + x).innerHTML = userInput;
    }

    if (x <= 1) {
      userInput = document.getElementById("adVerb" + x).value;
      document.getElementById("av" + x).innerHTML = userInput;

      userInput = document.getElementById("city" + x).value;
      document.getElementById("c" + x).innerHTML = userInput;
    }
  }
}

function random() {
  for (x = 1; x <= 4; x++) {
    var userInput = document.getElementById("noun" + x).value;
    document.getElementById("n" + x).innerHTML = userInput;

    userInput = document.getElementById("pluralNoun" + x).value;
    document.getElementById("pn" + x).innerHTML = userInput;

    if (x <= 2) {
      userInput = document.getElementById("ing" + x).value;
      document.getElementById("ing" + x).innerHTML = userInput;

      userInput = document.getElementById("adjective" + x).value;
      document.getElementById("a" + x).innerHTML = userInput;

      userInput = document.getElementById("number" + x).value;
      document.getElementById("num" + x).innerHTML = userInput;

      userInput = document.getElementById("verb" + x).value;
      document.getElementById("v" + x).innerHTML = userInput;
    }

    if (x <= 1) {
      userInput = document.getElementById("adverb" + x).value;
      document.getElementById("av" + x).innerHTML = userInput;

      userInput = document.getElementById("city" + x).value;
      document.getElementById("c" + x).innerHTML = userInput;
    }
  }
}

function fillInputs() {
  document.getElementById("noun1").value = dictionary("noun");
  document.getElementById("noun2").value = dictionary("noun");
  document.getElementById("noun3").value = dictionary("noun");
  document.getElementById("noun4").value = dictionary("noun");
  document.getElementById("pluralNoun1").value = dictionary("pluralNoun");
  document.getElementById("pluralNoun2").value = dictionary("pluralNoun");
  document.getElementById("pluralNoun3").value = dictionary("pluralNoun");
  document.getElementById("pluralNoun4").value = dictionary("pluralNoun");
  document.getElementById("ing1").value = dictionary("ing");
  document.getElementById("ing2").value = dictionary("ing");
  document.getElementById("adjective1").value = dictionary("adjective");
  document.getElementById("adjective2").value = dictionary("adjective");
  document.getElementById("adjective3").value = dictionary("adjective");
  document.getElementById("adVerb1").value = dictionary("adVerb");
  document.getElementById("number1").value = dictionary("number");
  document.getElementById("number2").value = dictionary("number");
  document.getElementById("verb1").value = dictionary("verb");
  document.getElementById("verb2").value = dictionary("verb");
  document.getElementById("city1").value = dictionary("city");
}

function dictionary(request) {
  var noun = [
    "person",
    "sandwich",
    "bird",
    "potato",
    "dolphin",
    "thing",
    "boat",
    "backpack",
    "oven",
    "yo-yo",
  ];

  var pluralNoun = [
    "videos",
    "fingers",
    "teeth",
    "mice",
    "leaves",
    "fish",
    "tomatoes",
    "bison",
    "axes",
    "aircraft",
  ];
  var ing = [
    "barking",
    "dragging",
    "drifting",
    "emptying",
    "exploring",
    "fixing",
    "following",
    "locking",
    "ignoring",
    "drinking",
  ];
  var adjective = [
    "plump",
    "plain",
    "glamorous",
    "scruffy",
    "witty",
    "zealous",
    "tiny",
    "itchy",
    "fierce",
    "dazzling",
  ];
  var adVerb = [
    "sweetly",
    "willingly",
    "most",
    "here",
    "purely",
    "backwards",
    "cleverly",
    "nicely",
    "sickly",
    "mysteriously",
  ];
  var verb = [
    "attack",
    "eat",
    "fly",
    "bark",
    "ravage",
    "floss",
    "itch",
    "jabber",
    "mutter",
    "purr",
  ];
  var city = [
    "Chicago",
    "Salt Lake City",
    "Boise",
    "Washougal",
    "Lehi",
    "San Diego",
    "Miami",
    "Talahassee",
    "Phoenix",
    "Detroit",
  ];
  var number = Math.ceil(Math.random() * 100000);
  var formatN = number.toLocaleString();

  var i = Math.floor(Math.random() * 10);

  if (request == "noun") return noun[i];
  else if (request == "pluralNoun") return pluralNoun[i];
  else if (request == "ing") return ing[i];
  else if (request == "adjective") return adjective[i];
  else if (request == "adVerb") return adVerb[i];
  else if (request == "verb") return verb[i];
  else if (request == "city") return city[i];
  else if (request == "number") return formatN;
}

function display() {
  document.getElementById("madLib").classList.add("show");
  document.getElementById("madLib").classList.remove("hide");
  document.getElementById("shuffle").classList.add("hide");
  document.getElementById("shuffle").classList.remove("show");
  document.getElementById("container").classList.remove("show");
  document.getElementById("container").classList.add("hide");
  document.getElementById("reload").classList.add("show");
  document.getElementById("reload").classList.remove("hide");
}
