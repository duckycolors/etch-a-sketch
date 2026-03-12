GRIDLENGTH = 600;

let rows = document.getElementById("inputX");
let cols = document.getElementById("inputY");
container = document.querySelector("#container");

rows.value = 16;
cols.value = 16;

container.style.width = `${GRIDLENGTH}px`
container.style.height = `${GRIDLENGTH}px`

document.getElementById("btn").onclick = function() {
  for (i = 0; i < (rows.value * cols.value); i++) {
    const gridCell = document.createElement("div");
    
    gridCell.style.width = `${GRIDLENGTH / cols.value - 2}px`;
    gridCell.style.height = `${GRIDLENGTH / rows.value - 2}px`;
    gridCell.classList.add("cell");

    container.appendChild(gridCell);

    gridCell.addEventListener("mouseover", function(e) {
        gridCell.style.backgroundColor = "red"
    })
      
  } 
}
// function changeGridColour() {
//   this.style.backgroundColor = "red";
// }



