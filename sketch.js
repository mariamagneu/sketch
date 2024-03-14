document.addEventListener("DOMContentLoaded", function() {
    const myGrid = document.querySelector("#myGrid")
    const numColumns = 16; 
    const numRows = 16;

    do {
        customGrid = parseInt(prompt("Enter a number between 0 and 100:"));
    } while (customGrid < 0 || customGrid > 100);
    

    
    for (let i = 0; i < customGrid; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        myGrid.appendChild(column);
       		for (let j = 0; j< customGrid; j++) {
       		const cell = document.createElement("div");
       		cell.classList.add("cell");
            cell.classList.add("hover");

					column.appendChild(cell);
    	}    
    }
    const hover = document.querySelectorAll(".hover");
    hover.forEach((element) => {
   		element.addEventListener("mouseover", (event) => {
        element.style.backgroundColor = "black";
        });
    });

});