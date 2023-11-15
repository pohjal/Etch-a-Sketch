document.addEventListener("DOMContentLoaded", function () {
  maker();
});

const button = document.querySelector("#myRange");
const gridInfo = document.querySelector("#size");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", eraserOnOff);
clear.addEventListener("click", clearGrid);
button.addEventListener("click", changeGrid);
let amount = 16;

let isMouseDown = false;
let isEraserActive = false;

const cont = document.getElementById("oikea");

cont.addEventListener("mousedown", function () {
  isMouseDown = true;
});

document.addEventListener("mouseup", function () {
  isMouseDown = false;
});

// Add mousedown and mouseup event listeners to the container

function eraserOnOff() {
  isEraserActive = !isEraserActive;
  if (isEraserActive == false) eraser.style.backgroundColor = "#e0e0e0";
  if (isEraserActive == true) eraser.style.backgroundColor = "grey";
}

function clearGrid() {
  cont.innerHTML = "";
  maker();
}

function maker() {
  cont.innerHTML = "";

  for (let i = 0; i < amount * amount; i++) {
    const item = document.createElement("div");

    const gridSize = 480 / amount;
    item.classList.add("grid-item");

    item.addEventListener("click", function () {
      // Change color on click
      if (isEraserActive == false) item.style.backgroundColor = "black";
      else {
        item.style.backgroundColor = "white";
      }
    });

    item.style.width = `${gridSize}px`;
    item.style.height = `${gridSize}px`;

    // Add mouseover event listener to each grid item
    item.addEventListener("mouseover", function () {
      if (isMouseDown) {
        // Change color on mouseover while mouse button is pressed
        if (isEraserActive == false) item.style.backgroundColor = "black";
        else {
          item.style.backgroundColor = "white";
        }
      }
    });
    cont.appendChild(item);
  }
}

function changeGrid() {
  gridInfo.textContent = button.value + " * " + button.value;
  console.log(button.value);
  amount = button.value;
  maker();
}
