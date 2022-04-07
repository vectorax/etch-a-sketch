const containerWidth = 960;

function createGrid (gridSize){
    let container = document.getElementById('container');
    let gridQty = gridSize * gridSize;
    let newSize = calcGridSize(gridSize);

    

    for (let i=0; gridQty > i; i++){
        let gridBox = document.createElement('div');
        gridBox.setAttribute('id',i);
        gridBox.setAttribute('class','gridBox');
        container.appendChild(gridBox);
    }

   
};

function calcGridSize(gridSize){
    let size = containerWidth/gridSize;
    console.log(size);
}

createGrid(16);