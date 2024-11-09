// var name = prompt("name");
// var age = prompt("age");
// alert("hi" + name + "you are" + age + "years old");

function display() {
  var name = documnet.getelementById("name").value;
  var age = documnet.getelementById("age").value;
  document.getElementById("output").textContent =
    "hi" + name + "you are" + age + "years old";
}
