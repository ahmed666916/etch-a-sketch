

// Select the container element from the NodeList
const container = document.getElementsByClassName('container')[0];

const row_container = document.getElementsByClassName('row-container')[0];
const column_container = document.getElementsByClassName('column-container')[0];

// Create an array to store the div elements
let squares = [];

// Create and append div elements to the array
for (let i = 0; i < 1497; i++) {
    let square = document.createElement('div');
    square.textContent = "Box";
    square.classList.add('square');
    squares.push(square);
}

// function for creating a div square
function createDiv() {
    let square = document.createElement('div');
    square.textContent = "Box";
    square.classList.add('square');
    return square;
}




// Append all div elements to the container


squares.forEach(square => {
    row_container.appendChild(square);
    //column_container.appendChild(square);
});



container.appendChild(row_container);
container.appendChild(column_container);

// Append the container to the body
document.body.appendChild(container);
