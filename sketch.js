document.addEventListener("DOMContentLoaded", function() {
    const myGrid = document.querySelector("#myGrid")
    const column = document.createElement("div");
    document.body.appendChild(column);
    const numColumns = 16; 
    const numRows = 16;


    
    for (let i = 1; i <= numColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.textContent = i;
        myGrid.appendChild(column);
       		for (let j = 1; j< numRows; j++) {
       		const cell = document.createElement("div");
       		cell.classList.add("cell");
        	cell.textContent = j + '';
        	column.appendChild(cell);
    	}    
    }
    
    
    
});