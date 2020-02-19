document.getElementById("helloButton").addEventListener("click", displayHello);
document.getElementById("goodbyeButton").addEventListener("click", displayGoodbye);

function displayHello() {
  var x = document.getElementsByClassName("rows");
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "Hello";
    x[i].style.display = "block";
  }
};

function displayGoodbye() {
  var x = document.getElementsByClassName("rows");
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "Goodbye";
    x[i].style.display = "block";
  }
};
