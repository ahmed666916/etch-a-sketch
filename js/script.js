
const container = document.querySelector('.container');



for (let i = 0; i < 257; i++) {
    const div = document.createElement('div');
    container.appendChild(div);

    div.addEventListener('mouseover', func, false);
    
}



function func() {
    this.setAttribute("style", "background-color: blue");
    
}