const canvasDiv = document.querySelector(".canvas");
const resizeButton = document.querySelector(".btn-resize");

let rows = [];
let rowDiv;
let canvaWidth = 600;


resizeButton.addEventListener("click", () => {

    let size;

    size = askGridSize();

    if (!size) {
        window.alert("Type a valid number");
    } else if (size < 1 || size > 100) {
        window.alert("Type a number between 1 and 100");
    } else {
        removeCurrentGrid();
        makeGrid(size, canvaWidth);
    }
    
})


function makeGrid(canvaBlockSize, canvaWidth) {
    
    let blockWidth = canvaWidth / canvaBlockSize;

    console.log(`${blockWidth} = ${canvaWidth} / ${canvaBlockSize}`);
    

    for (let rowIndex = 0; rowIndex < canvaBlockSize; rowIndex++) {
        rowDiv = document.createElement("div");
    
        rowDiv.className = "row-div";
    
        for (let blockIndex = 0; blockIndex < canvaBlockSize; blockIndex++) {
            let blockItem = document.createElement("div");

            blockItem.style.width = `${blockWidth}px`;
            blockItem.style.height = `${blockWidth}px`;
    
            blockItem.addEventListener("mouseenter", () => {
                blockItem.style.backgroundColor = 'blue';
            })
    
            rowDiv.appendChild(blockItem);
        }
        
        canvasDiv.appendChild(rowDiv);
    }
    
}

function removeCurrentGrid() {

    while (canvasDiv.lastChild) {
        canvasDiv.removeChild(canvasDiv.lastChild);
    }
}

function askGridSize() {
    let size;

    size = prompt("Type the size of the grid. A number from 1 to 100.");
    
    size = Number(size);

    if (size === NaN) {
        return false;

    } else if (size < 1 || size > 100) {
        return -1;

    }

    return size;
}


makeGrid(16, canvaWidth);