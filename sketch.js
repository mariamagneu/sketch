document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    document.body.appendChild(button)
    document.body.prepend(button);

    button.textContent = "press me to set a different grid size";
    const myGrid = document.querySelector("#myGrid")
    let startGrid = 16;
    let newGrid = "";


    function createStartGrid() {
        for (let i = 0; i < startGrid; i++) {
            const column = document.createElement("div");
            column.classList.add("column");
            myGrid.appendChild(column);
            for (let j = 0; j < startGrid; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add("hover");
                column.appendChild(cell);
            }
            function randomBgColor() {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                console.log(bgColor);
                return bgColor;
            }
    
            const hover = document.querySelectorAll(".hover");
            hover.forEach((element) => {
                element.addEventListener("mouseover", (event) => {
                    element.style.backgroundColor = randomBgColor();
                });
            });
    
        }
    }
    
    createStartGrid();

    button.addEventListener("click", () => {
        customGrid = parseInt(prompt("insert a number between 0 & 100"));
        myGrid.innerHTML="";
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
        
        function randomBgColor() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            console.log(bgColor);
            return bgColor;
        }

        const hover = document.querySelectorAll(".hover");
        hover.forEach((element) => {
            element.addEventListener("mouseover", (event) => {
                element.style.backgroundColor = randomBgColor();
            });
        });

    });

});