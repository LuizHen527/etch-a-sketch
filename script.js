const canvasDiv = document.querySelector(".canvas");
const resizeButton = document.querySelector(".btn-resize");

let rows = [];
let rowDiv;


resizeButton.addEventListener("click", () => {

    let size;

    size = askGridSize();

    if (!size) {
        window.alert("Type a valid number");
    } else if (size < 1 || size > 100) {
        window.alert("Type a number between 1 and 100");
    }
    
})


for (let rowIndex = 0; rowIndex < 16; rowIndex++) {
    rowDiv = document.createElement("div");

    rowDiv.className = "row-div";

    for (let blockIndex = 0; blockIndex < 16; blockIndex++) {
        let blockItem = document.createElement("div");

        blockItem.addEventListener("mouseenter", () => {
            blockItem.style.backgroundColor = 'red';
        })

        rowDiv.appendChild(blockItem);
    }
    
    canvasDiv.appendChild(rowDiv);
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

function makeNewGrid(size) {
    
}