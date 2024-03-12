document.addEventListener("DOMContentLoaded", function() {
    const myGrid = document.querySelector("#myGrid")
    const cell = document.createElement("div");
    document.body.appendChild(cell);
    const numColumns = 16; 
    const numCells = 16;


    
    for (let i = 1; i <= numColumns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i;
        myGrid.appendChild(cell);
    }

    
    
});