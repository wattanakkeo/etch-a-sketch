// 1. Use the same function and go into each traversal to create 15 more divs

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const gridBoxRow = document.createElement("div");
  gridBoxRow.classList.add("grid-box-row");
  gridBoxRow.textContent = "Hi";
  container.appendChild(gridBoxRow);
  
  let j = 0;
  
  while (j != 15) {
    const gridBoxColumn = document.createElement("div");
    gridBoxColumn.classList.add("grid-box-column");
    gridBoxColumn.textContent = "Hi";
    gridBoxRow.appendChild(gridBoxColumn);
    j += 1;
  }
}
