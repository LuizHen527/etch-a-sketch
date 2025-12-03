const canvasDiv = document.querySelector(".canvas");

let rows = [];
let rowDiv;
let blockItem;


for (let rowIndex = 0; rowIndex < 16; rowIndex++) {
    rowDiv = document.createElement("div");

    rowDiv.className = "row-div";

    for (let blockIndex = 0; blockIndex < 16; blockIndex++) {
        blockItem = document.createElement("div");

        rowDiv.appendChild(blockItem);
    }
    
    canvasDiv.appendChild(rowDiv);
}
