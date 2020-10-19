const container = document.querySelector("#squares-container");
const colorpicker = document.querySelector("#colorpicker");
const xsizeinput = document.querySelector("#xsize");
const rainbowbutton = document.querySelector("#rainbowbutton");

let rainbow = false;
rainbowbutton.style = "background-color: #ffcfcf;";

let size, area;

function setValues(xy) {
    size = xy;
    area = size ** 2;
}

setValues(16);

colorpicker.value = "#000";
let color = colorpicker.value;

colorpicker.addEventListener('change', (e) => {
    color = e.target.value;
});

function createGrid() {
    container.style.setProperty('--grid-size', `${size}`);
    container.innerHTML = "";
    for(let i = 0; i < area; i++) {
        let single = document.createElement("div");
        single.classList.add("single");
        container.appendChild(single);
    }
    addListeners();
}

createGrid();

function addListeners() {
    const nodearray = [...container.childNodes];
    nodearray.forEach((node) => {
        node.addEventListener('mouseover', (e) => {
            e.target.style = `background-color: ${color};`;
            if(rainbow) {
                e.target.style = `background-color: rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
            }
        })
    });
}

function rainbowMode() {
    rainbow = !rainbow;
    if(rainbow)
        rainbowbutton.style = "background-color: #cfffdb;";
    else
        rainbowbutton.style = "background-color: #ffcfcf;";

    console.log(rainbow);
    addListeners();
}

function changeSize() {
    const newSize = parseInt(prompt("Choose a new GRID size (keep it under 100)"));

    if(!newSize || newSize > 100) {
        alert("Choose a valid number!");
        return;
    }

    setValues(newSize);
    createGrid();
}