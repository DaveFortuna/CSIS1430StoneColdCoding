var username = prompt("What is your name?");
var age = prompt("What is your age? ");
var month = prompt("What month were you born in? ");

var season = findSeason();
var stone = findstone();

alert(
  "Happy Birthday " +
    username +
    "! You are " +
    age +
    " Years old until your next birthday in " +
    month +
    season +
    " Your birthstone is: " +
    stone
);

var html = document.getElementById("information").innerHTML;
document.getElementById("information").innerHTML =
  "Happy Birthday " +
  username +
  "! You are " +
  age +
  " Years old until your next birthday in " +
  month +
  season +
  " Your birthstone is: " +
  stone;

function findSeason() {
  if (month == "January" || month == "February" || month == "December") {
    season = "! It's cold and winter!";
  } else if (month == "March" || month == "April" || month == "May") {
    season = "! It's cold but Warming into spring!";
  } else if (month == "June" || month == "July" || month == "August") {
    season = "! It's summer time!";
  } else month == "September" || month == "October" || month == "November";
  {
    season = "! It's fall and we need turkey!";
  }

  return season;
}

function findstone() {
  if (month == "January") {
    stone = "Red Garnet";
  } else if (month == "February") {
    stone = "Purple Amethyst";
  } else if (month == "March") {
    stone = "Teal Aquamarine";
  } else if (month == "April") {
    stone = "Clear Diamond";
  } else if (month == "May") {
    stone = "Green Emerald";
  } else if (month == "June") {
    stone = "Blue Moonstone";
  } else if (month == "July") {
    stone = "Red Ruby";
  } else if (month == "August") {
    stone = "Yellow Peridot";
  } else if (month == "September") {
    stone = "Blue Sapphire";
  } else if (month == "October") {
    stone = "Purple Tourmaline";
  } else if (month == "November") {
    stone = "Gold Citrine";
  } else {
    stone = "Blue Tanzanite";
  }
  return stone;
}
