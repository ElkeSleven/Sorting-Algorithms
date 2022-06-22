
// dom elementen
const grid = document.getElementById('grid')
const button = document.getElementById('start')

let ongesorteerdeArray = [7,5,8,3,0,2,15,45,6,16,10,17,18,22,1]
let arrayToRender = [];
let currentIndex = 0
let isEerst = true
let isLaatse = false
let gesorteerdeArray = 0


window.onload = function (){
    arrayToRender = ongesorteerdeArray
    grid.innerHTML =  maakGrid();
    button.addEventListener('click', sortArray)
}

function sortArray(){
        bubbleSort(arrayToRender)
}
function compere(eersteWaarde, tweedeWaarde){
    if (eersteWaarde > tweedeWaarde){
        return 1
    }
    else if (eersteWaarde < tweedeWaarde){
        return 0
    }
    else if (eersteWaarde === tweedeWaarde){
        return -1
    }
}
function bubbleSort() {

    while (gesorteerdeArray !== arrayToRender.length) {


        if (currentIndex === arrayToRender.length - 1) {
            currentIndex = 0
            isLaatse = true
        }
        let eersteWaarde = arrayToRender[currentIndex]
        let tweedeWaarde = arrayToRender[currentIndex + 1]
        console.log('eersteWaarde:', eersteWaarde)
        console.log('tweedeWaarde:', tweedeWaarde)
        console.log(currentIndex)
        if (isEerst === false && isLaatse === false) {
            document.getElementById(`${currentIndex - 1}`).classList.remove('current')
            document.getElementById(`${currentIndex}`).classList.remove('green')
        }
        if (isLaatse === true) {
            document.getElementById(`${arrayToRender.length - 2}`).classList.remove('current')
            document.getElementById(`${arrayToRender.length - 1}`).classList.remove('green')
            isLaatse = false
        }
        isEerst = false
        document.getElementById(`${currentIndex}`).classList.add('current')
        document.getElementById(`${currentIndex + 1}`).classList.add('green')

        let result = compere(eersteWaarde, tweedeWaarde)
        console.log(result)
        if (result === 1) {
            document.getElementById(`${currentIndex}`).innerText = tweedeWaarde
            document.getElementById(`${currentIndex + 1}`).innerText = eersteWaarde

            arrayToRender[currentIndex] = tweedeWaarde;
            arrayToRender[currentIndex + 1] = eersteWaarde;

            gesorteerdeArray = 0
        } else if (result === 0) {
            document.getElementById(`${currentIndex + 1}`).innerText = tweedeWaarde
            document.getElementById(`${currentIndex}`).innerText = eersteWaarde

            arrayToRender[currentIndex + 1] = tweedeWaarde;
            arrayToRender[currentIndex] = eersteWaarde;

            gesorteerdeArray++
        }

        currentIndex++
    }
}
function maakGrid(){
    let index = ''
    for(let i = 0; arrayToRender.length  > i ; i++){
      index += `<div class="grid-element" id="${i}"><span>${arrayToRender[i]}</span></div>`
    }
    return index
}
