// Allows the user to change the size of the grid
const DEFAULT_SIZE = 16;
let size = null;

function changeSize() {
  const gridSize = document.querySelector(".grid-size");
  gridSize.addEventListener("click", () => {
    size = prompt("Enter a size 1-100");
    if (size < 1 || size > 100) {
      prompt("ERROR: Enter a size 1-100");
    }
    container.replaceChildren();
    gridGenerator(size);

    
    
  });
};

// Generates a 16x16 grid for the etch a sketch using a nested for loop
const container = document.querySelector(".container");

function gridGenerator(size) {
  for (let i = 0; i < size; i++) {
    const gridBoxColumn = document.createElement("div");
    gridBoxColumn.classList.add(".grid-box-column");
    container.appendChild(gridBoxColumn);
  
    for (let j = 0; j < size; j++) {
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
}

// Resets the entire grid back to white
function resetBtn() {
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
  container.replaceChildren();
  gridGenerator(DEFAULT_SIZE);
  });
}

gridGenerator(DEFAULT_SIZE);
resetBtn();
changeSize();





// 2. Generate 17 buttons for colors to select from

// 3. On mousedown activate mouseover and on mouseup deactivate

// 4. Add an eraser tool

