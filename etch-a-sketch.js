// Generates a 16x16 grid for the etch a sketch using a nested for loop
function gridGenerator() {
  const container = document.querySelector(".container");

  for (let i = 0; i < 16; i++) {
    const gridBoxColumn = document.createElement("div");
    gridBoxColumn.classList.add(".grid-box-column");
    container.appendChild(gridBoxColumn);
  
    for (let j = 0; j < 16; j++) {
      const gridBoxRow = document.createElement("div");
      gridBoxRow.classList.add("grid-box-row");
      gridBoxColumn.appendChild(gridBoxRow);
    }
  }
  
  // Alters the box to black when hovered over
  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-box-row")) {
      event.target.style.backgroundColor = "black";
    }
  });

  // Resets the entire grid back to white
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  container.replaceChildren();
  gridGenerator();
})
}

gridGenerator();

// 1. Change the grid size function

// 2. Generate 17 buttons for colors to select from

// 3. On mousedown activate mouseover and on mouseup deactivate

// 4. Add an eraser tool

