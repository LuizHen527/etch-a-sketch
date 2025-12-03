const canvasDiv = document.querySelector(".canvas");

let rows = [];
let rowDiv;


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


