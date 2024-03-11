document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector("#myGrid")
    const rows = document.createElement("div");
    document.body.appendChild(rows);
    const numColumns = 16; 


    
    for (let i = 1; i <= numColumns; i++) {
        const column = document.createElement("div");
        column.classList.add("rowContainer");
        column.textContent = "this is a row";
        rows.appendChild(column);
    }
    
});