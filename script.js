
// dom elementen
const grid = document.getElementById('grid')

let ongesorteerdeArray = ['5','3','9','56','6','0','7','8','2', '20','15','13','19','256','16','10','17','18','22', '1']
let ArrayToRender = [];



window.onload = function (){
    ArrayToRender = ongesorteerdeArray
    grid.innerHTML =  maakGrid();

}



function renderArray(){



}

function maakGrid(){
    let index = ''
    for(let i = 0; ArrayToRender.length  > i ; i++){
      index += `<div class="grid-element"><span>${ArrayToRender[i]}</span></div>`
    }
    return index
}
