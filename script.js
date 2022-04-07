

function createGrid (gridSize){
    let container = document.getElementById('container');
    let gridQty = gridSize * gridSize;

    for (let i=0; gridQty >= i; i++){
        let gridBox = document.createElement('div');
        gridBox.setAttribute('id',i);
        gridBox.setAttribute('class','gridBox');
        container.appendChild(gridBox);
    }
    
};

