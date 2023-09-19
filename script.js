function resetGrid(...args){
    const container = document.querySelector('#container');
    container.innerHTML = "";
    if(args.length === 0){
    for(i = 1; i <= 16; i++) {
        container.innerHTML += `<div data-row="${i}" class="row"></div>`
        const row = document.querySelector(`[data-row="${i}"]`)
        for(j = 1; j <= 16; j++){
            row.innerHTML += '<div class="col"></div>'
        }
    }
    }else{
        const gridSquares = args[0];
        for(i = 1; i <= gridSquares; i++) {
            container.innerHTML += `<div data-row="${i}" class="row"></div>`
            const row = document.querySelector(`[data-row="${i}"]`)
            for(j = 1; j <= gridSquares; j++){
                row.innerHTML += '<div class="col"></div>'
            }
        }
    }
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => col.addEventListener('mouseover', changeColor));
    cols.forEach((col) => col.addEventListener('mousedown', changeColor))
}
resetGrid();

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
function changeColor(e) {
    if (e.type == 'mouseover' && !mouseDown) return;
    e.currentTarget.style.cssText = `background-color: black;`;
        
}

function changeGrid(){
    let colNumber = +prompt('Type the number of columns', '');
    while(colNumber > 100){
        colNumber = +prompt('Type a number less than 100', '')
    }
    resetGrid(colNumber);
}

const gridChanger = document.querySelector('#grid-changer');
gridChanger.addEventListener('click', changeGrid)



