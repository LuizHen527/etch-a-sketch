let rows = [];
let rowDiv;
let blockItem;


for (let rowIndex = 0; rowIndex < 16; rowIndex++) {
    rowDiv = document.createElement("div");

    for (let blockIndex; blockIndex < 16; blockIndex++) {
        blockItem = document.createElement("div");

        rowDiv.appendChild(blockItem);
    }
    
    rows.push(rowDiv);
}

console.log(rows);
