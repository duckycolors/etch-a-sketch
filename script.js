GRIDLENGTH = 600;

let gridInput = document.getElementById("gridNumber");
let gridInputNumber = document.getElementById("gridNumberLabel");
let container = document.querySelector("#container");
let colourSelector = document.querySelector("#colourselect");

gridInput.value = 16;
gridInputNumber.textContent = `Grid Number: ${gridInput.value}`;

gridInput.addEventListener("input", function() {
  gridInputNumber.textContent = `Grid Number: ${gridInput.value}`;
  if(gridInput.value < 10) {
    gridInputNumber.style.color = "red";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 20) {
    gridInputNumber.style.color = "orange";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 30) {
    gridInputNumber.style.color = "goldenrod";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 40) {
    gridInputNumber.style.color = "limegreen";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 50) {
    gridInputNumber.style.color = "lime";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 60) {
    gridInputNumber.style.color = "lightblue";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 70) {
    gridInputNumber.style.color = "dodgerblue";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 80) {
    gridInputNumber.style.color = "mediumorchid";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 90) {
    gridInputNumber.style.color = "pink";
    gridInputNumber.style.transition = "0.5s";
  }
  if(gridInput.value >= 99) {
    gridInputNumber.style.color = "deeppink";
    gridInputNumber.style.transition = "0.5s";
  }
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
        gridCell.style.backgroundColor = colourSelector.value;
    })
    btn.addEventListener("click", function() {
        gridCell.remove("gridCell");
    });
  } 
}



