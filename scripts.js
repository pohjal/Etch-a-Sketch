document.addEventListener("DOMContentLoaded", function () {
  maker();
});

let amount = 10;

function maker() {
  const cont = document.getElementById("oikea");

  for (let i = 0; i < amount * amount; i++) {
    const item = document.createElement("div");

    const gridSize = 320 / amount;
    item.classList.add("grid-item");

    item.style.width = `${gridSize}px`;
    item.style.height = `${gridSize}px`;
    cont.appendChild(item);
  }
}
