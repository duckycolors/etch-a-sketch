let divNumberX = document.getElementById("inputX");
let divNumberY = document.getElementById("inputY");

divNumberX.value = 16;
divNumberY.value = 16;

container = document.querySelector("#container");

document.getElementById("btn").onclick = function() {
  for (i = 0; i < (divNumberX.value * divNumberY.value); i++) {
  const div1 = document.createElement("div");
  container.appendChild(div1);
  }

}



