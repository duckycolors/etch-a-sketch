GRIDLENGTH = 600;

let gridInput = document.getElementById("gridNumber");
let gridInputNumber = document.getElementById("gridNumberLabel");
container = document.querySelector("#container");

gridInput.value = 16;
gridInputNumber.textContent = `Grid Number: ${gridInput.value}`;

gridInput.addEventListener("input", function() {
  gridInputNumber.textContent = `Grid Number: ${gridInput.value}`;
});

container.style.width = `${GRIDLENGTH}px`
container.style.height = `${GRIDLENGTH}px`

document.getElementById("btn").onclick = function() {
  for (i = 0; i < (gridInput.value * gridInput.value); i++) {
    const gridCell = document.createElement("div");
    
    gridCell.style.width = `${GRIDLENGTH / gridInput.value - 2}px`;
    gridCell.style.height = `${GRIDLENGTH / gridInput.value - 2}px`;
    gridCell.classList.add("cell");

    container.appendChild(gridCell);

    gridCell.addEventListener("mouseover", function(e) {
        gridCell.style.backgroundColor = "lightblue";
    })
    btn.addEventListener("click", function() {
        gridCell.remove("gridCell");
    });
  } 
}
// function changeGridColour() {
//   this.style.backgroundColor = "red";
// }



