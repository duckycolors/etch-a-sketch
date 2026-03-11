GRIDLENGTH = 600;

let rows = document.getElementById("inputX");
let cols = document.getElementById("inputY");
container = document.querySelector("#container");

container.style.width = `${GRIDLENGTH}px`
container.style.height = `${GRIDLENGTH}px`

rows.value = 16;
cols.value = 16;

document.getElementById("btn").onclick = function() {
  for (i = 0; i < (rows.value * cols.value); i++) {
  const gridCell = document.createElement("div");
  gridCell.id = "div1";
  container.appendChild(gridCell);
  }

}



