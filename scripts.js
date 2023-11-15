document.addEventListener("DOMContentLoaded", function () {
  maker();
});

const button = document.querySelector("#myRange");
const gridInfo = document.querySelector("#size");
button.addEventListener("click", changeGrid);
let amount = 16;

function maker() {
  const cont = document.getElementById("oikea");
  cont.innerHTML = "";

  for (let i = 0; i < amount * amount; i++) {
    const item = document.createElement("div");

    const gridSize = 480 / amount;
    item.classList.add("grid-item");

    item.style.width = `${gridSize}px`;
    item.style.height = `${gridSize}px`;
    cont.appendChild(item);
  }
}

function changeGrid() {
  gridInfo.textContent = button.value + " * " + button.value;
  console.log(button.value);
  amount = button.value;
  maker();
}
