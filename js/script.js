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

function func() {
    this.setAttribute("style", "background-color: blue");
    
}