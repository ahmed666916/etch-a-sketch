const button = document.createElement('button');
button.textContent = "Change Grid Size";
document.body.insertBefore(button, document.body.firstChild);




const container = document.querySelector('.container');


//Initial grid size 
let gridSize = 16;


function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';

    // Set new grid size
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        container.appendChild(div);

        div.addEventListener('mouseover', func, false);
    }
}

// Function to handle button click
function changeGridSize() {
    // Get user input for the new grid size
    let newSize = prompt('Enter the number of squares per side (max: 100):');

    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    // Update gridSize and create a new grid
    gridSize = newSize;
    createGrid(gridSize);
}

function func() {
    this.setAttribute("style", "background-color: blue");
    
}