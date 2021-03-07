const containerDivElement = document.querySelector('.container');

function createGrid(size) {
    containerDivElement.style['grid-template-rows'] = `repeat(${size}, auto)`;
    containerDivElement.style['grid-template-columns'] = `repeat(${size}, auto)`;
    for (i = 0; i < size**2; i++) {
        let div = document.createElement('div');
        div.classList.add('sketch-box');
        div.style['width'] = `calc(50vh/${size})`;
        div.style['height'] = `calc(50vh/${size})`;

        div.addEventListener("mouseover", function () { 
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            div.style.background = `rgb(${red},${green},${blue})`; 
        });

        containerDivElement.appendChild(div);
    }
}

function getInput() {
    let size = parseInt(prompt("Grid Size (Max: 32)"));
    if (isNaN(size)) {
        size = 1;
    }
    size = Math.min(size, 32);
    size = Math.max(size, 1);
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    while (containerDivElement.lastChild) {
        containerDivElement.removeChild(containerDivElement.lastChild);
    }
}

createGrid(16);