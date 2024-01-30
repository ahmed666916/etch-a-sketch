

// Create an array to store the div elements
let squares = [];

// Create and append div elements to the array
for (let i = 0; i < 31; i++) {
    let square = document.createElement('div');
    square.textContent = "Ahmed";
    square.classList.add('square');
    squares.push(square);
}

// Select the container element from the NodeList
const container = document.getElementsByClassName('container')[0];

// Append all div elements to the container
squares.forEach(square => {
    container.appendChild(square);
});

// Append the container to the body
document.body.appendChild(container);
