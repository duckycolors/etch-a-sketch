let divNumberX = document.getElementById("inputX");
let divNumberY = document.getElementById("inputY");

divNumberX.value = 16;
divNumberY.value = 16;

container = document.querySelector("#container");

document.getElementById("btn").onclick = function() {
  for (i = 0; i < (divNumberX.value * divNumberY.value); i++) {
  const div1 = document.createElement("div");
  div1.id = "div1";
  container.appendChild(div1);
  }

}



