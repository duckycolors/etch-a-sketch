GRIDLENGTH = 600;

let gridInput = document.getElementById("gridNumber");
let gridInputNumber = document.getElementById("gridNumberLabel");
let container = document.querySelector("#container");
let colourSelector = document.querySelector("#colourselect");
let darkButton = document.querySelector("#darkbutton");
let colourButton = document.querySelector("#colourbutton");
let darkText = document.querySelector("#darktext");
let rainbowText = document.querySelector("#rainbowtext");

function randomColour () {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  return (`rgb(${r}, ${g}, ${b})`);
}

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
    gridInputNumber.style.color = "yellow";
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
    gridCell.style.backgroundColor = "lightgray";
    gridCell.style.opacity = 1;

    gridCell.style.width = `${GRIDLENGTH / gridInput.value - 2}px`;
    gridCell.style.height = `${GRIDLENGTH / gridInput.value - 2}px`;
    gridCell.classList.add("cell");

    container.appendChild(gridCell);

    const overlay = document.createElement("div");
    overlay.style.backgroundColor = "black";
    overlay.style.opacity = 0;
    
    overlay.style.width = `${GRIDLENGTH / gridInput.value - 2}px`;
    overlay.style.height = `${GRIDLENGTH / gridInput.value - 2}px`;
    overlay.style.zIndex = "999";
    gridCell.appendChild(overlay);
    
    gridCell.addEventListener("mouseover", function(e) {
      gridCell.style.backgroundColor = colourSelector.value;
    })

    colourButton.addEventListener("click", function(e) {
      gridCell.addEventListener("mouseover", function(e) {
      gridCell.style.backgroundColor = randomColour();
     })
      colourButton.style.border = "2px solid deepskyblue";
      colourButton.style.transition = "0.2s";
      rainbowText.style.color = "deepskyblue";
      rainbowText.style.transition = "0.2s";
    })

    darkButton.addEventListener("click", function(e) {
      gridCell.addEventListener("mouseover", function(e) {
        const currentOpacity1 = gridCell.style.opacity;
        const currentOpacity2 = overlay.style.opacity;
        console.log("the gridCell current opacity is " + currentOpacity1);
        console.log("the overlay current opacity is " + currentOpacity2);
        overlay.style.opacity = parseFloat(overlay.style.opacity) + 0.10;
     })
      darkButton.style.border = "2px solid deepskyblue";
      darkButton.style.transition = "0.2s";
      darkText.style.color = "deepskyblue";
      darkText.style.transition = "0.2s";
    })
  
    btn.addEventListener("click", function() {
        gridCell.remove("gridCell");
        colourButton.style.border = "2px solid black";
        rainbowText.style.color = "black";
        darkButton.style.border = "2px solid black";
        darkText.style.color = "black";
    });
  } 
}



