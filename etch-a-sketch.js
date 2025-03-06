// Generates a 16x16 grid for the etch a sketch using a nested for loop
const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const gridBoxRow = document.createElement("div");
  gridBoxRow.classList.add("grid-box-row");
  container.appendChild(gridBoxRow);

  for (let j = 0; j < 16; j++) {
    const gridBoxColumn = document.createElement("div");
    gridBoxColumn.classList.add("grid-box-column");
    gridBoxRow.appendChild(gridBoxColumn);
  }
}


