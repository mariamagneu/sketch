document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector("#myGrid");
    const numColumns = 16; //
   
    
    for (let i = 1; i <= numColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.textContent = "test"
        gridContainer.appendChild(column);
    }
    

});