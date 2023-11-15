document.addEventListener("DOMContentLoaded", function () {
  maker();
});

const button = document.querySelector("#myRange");
const gridInfo = document.querySelector("#size");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const multiColor = document.querySelector("#randColor");
const colorChosen = document.querySelector("#colorpicker");

colorChosen.addEventListener("input", setNewColor);
multiColor.addEventListener("click", randColorOnOff);
eraser.addEventListener("click", eraserOnOff);
clear.addEventListener("click", clearGrid);
button.addEventListener("click", changeGrid);
let amount = 16;
let color = "black";

let isMouseDown = false;
let isEraserActive = false;
let isRandomColorActive = false;

const cont = document.getElementById("oikea");

cont.addEventListener("mousedown", function () {
  isMouseDown = true;
});

document.addEventListener("mouseup", function () {
  isMouseDown = false;
});

function setNewColor() {
  color = colorChosen.value;
  console.log(color);
}

// Add mousedown and mouseup event listeners to the container
function randColorOnOff() {
  isRandomColorActive = !isRandomColorActive;
  if (isRandomColorActive == false) {
    multiColor.style.backgroundColor = "#e0e0e0";
  }
  if (isRandomColorActive == true) {
    multiColor.style.backgroundColor = "gray";
  }
}

function eraserOnOff() {
  isEraserActive = !isEraserActive;
  if (isEraserActive == false) eraser.style.backgroundColor = "#e0e0e0";
  if (isEraserActive == true) eraser.style.backgroundColor = "gray";
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
      if (isRandomColorActive) {
        if (isEraserActive == false) item.style.backgroundColor = randColor();
        else {
          item.style.backgroundColor = "white";
        }
      } else {
        if (isEraserActive == false) item.style.backgroundColor = color;
        else {
          item.style.backgroundColor = "white";
        }
      }
    });

    item.style.width = `${gridSize}px`;
    item.style.height = `${gridSize}px`;

    // Add mouseover event listener to each grid item
    item.addEventListener("mouseover", function () {
      if (isMouseDown) {
        // Change color on mouseover while mouse button is pressed
        if (isRandomColorActive)
          if (isEraserActive == false) item.style.backgroundColor = randColor();
          else {
            item.style.backgroundColor = "white";
          }
        else {
          if (isEraserActive == false) item.style.backgroundColor = color;
          else {
            item.style.backgroundColor = "white";
          }
        }
      }
    });
    cont.appendChild(item);
  }
}

function changeGrid() {
  gridInfo.textContent = button.value + " X " + button.value;
  console.log(button.value);
  amount = button.value;
  maker();
}

function randColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
