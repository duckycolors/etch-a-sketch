let divNumberX = 16;
let divNumberY = 16;

container = document.querySelector("#container");


for (i = 0; i < (divNumberX * divNumberY); i++) {
  const div1 = document.createElement("div");
  container.appendChild(div1);
}


