

// Create an array to store the div elements
let squares = [];

// Create and append div elements to the array
for (let i = 0; i < 16; i++) {
    let square = document.createElement('div');
    square.textContent = "Box";
    square.classList.add('square');
    squares.push(square);
}



for (let i = 0; i < 16; i++) {
    let column = document.createElement('div');
    column.textContent = "Column";
    column.classList.add('column');
    columns.push(column);
}


// Select the container element from the NodeList
const container = document.getElementsByClassName('container')[0];

const row_container = document.getElementsByClassName('row-container')[0];

const column_container = document.getElementsByClassName('column-container')[0];



// Append all div elements to the container
rows.forEach(row => {
    row_container.appendChild(row);
});


columns.forEach(column => {
    column_container.appendChild(column);
})
container.appendChild(row_container);
container.appendChild(column_container);

// Append the container to the body
document.body.appendChild(container);
