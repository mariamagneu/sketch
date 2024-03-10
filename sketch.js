document.addEventListener("DOMContentLoaded", function() {
        const rows = 16;
        const columns = 16;
        const gridContainer = document.getElementById('myGrid');

    // Create the grid dynamically
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        // Create a grid item element
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = `Cell ${i + 1}-${j + 1}`;

        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
      }
    }
});