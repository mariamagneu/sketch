document.addEventListener("DOMContentLoaded", function() {
    const myGrid = document.querySelector("#myGrid")
    const numColumns = 16; 
    const numRows = 16;


    
    for (let i = 0; i < numColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        myGrid.appendChild(column);
       		for (let j = 0; j< numRows; j++) {
       		const cell = document.createElement("div");
       		cell.classList.add("cell");
					cell.textContent = j + '/' + i;
					column.appendChild(cell);
    	}    
    }
    
     
});