const containerWidth = 960;
let container = document.getElementById('container');
container.addEventListener("mouseover",hovered);

function createGrid (gridSize){
    let gridQty = gridSize * gridSize;
    let newSize = calcGridSize(gridSize);
    console.log('new: ' + newSize);
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;

    for (let i=0; gridQty > i; i++){
        let gridBox = document.createElement('div');
        gridBox.setAttribute('id',i);
        gridBox.setAttribute('class','gridBox');
        gridBox.innerText = '.';
        container.appendChild(gridBox);
    }

   
};

function hovered(e){
    if(e.target !== e.currentTarget){
        let hoveredBox = e.target;
        hoveredBox.classList.add('hovered');
    }
}
function newGrid(gridSize){
    gridSize = prompt('What size grid would you like?')
    console.log(gridSize);
    if(gridSize <= 100){
        container.innerHTML = "";
        createGrid(gridSize);
    } else {alert('Please select a number between 1 and 100')}
}

function calcGridSize(gridSize){
    let size = containerWidth/gridSize;
    console.log('size: ' + size);
    return size;
}

createGrid(16);