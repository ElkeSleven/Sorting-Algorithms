
// dom elementen
const grid = document.getElementById('grid')
const btn_Start = document.getElementById('start')
const buttonLenghtArray = document.getElementById('lenghtArray-btn')
const inputLenghtArray = document.getElementById('lenghtArray')
buttonLenghtArray.addEventListener('click', createOngesorteerdeArray)

let ongesorteerdeArray = []
let arrayToRender = [];
let currentIndex = 0
let isEerst = true
let isLaatse = false
let gesorteerdeArray = 0
let arrLenght = 0;
window.onload = function (){
    createSelect();
}
function createSelect(){
    const sortOptions = [
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort',
    'Merge Sort',
    'Quick Sort',
    'Bucket Sort',]

    let select = document.createElement('select')
    select.name = `sortOptions`
    sortOptions.forEach(sortOption => {
        let option = document.createElement('option');
        option.value = sortOption;
        option.innerText = sortOption;
        select.appendChild(option);

    })
    document.getElementById('sortSelect').appendChild(select)
}
function btnStartClicked(){
    //let selectedSortOption = document.getElementsByName('sortOptions')[0].value
    // kijk welke option is gesilecteerd
    switch(document.getElementsByName('sortOptions')[0].value) {
        case('Bubble Sort'):
            sortArray_bubbleSort();
            break;
        case('Selection Sort'):
            //code
            break;
        case( 'Insertion Sort'):
            //code
            break;
        case( 'Merge Sort'):
            //code
            break;
        case ( 'Quick Sort'):
            //code
            break;
        case ( 'Bucket Sort'):
            //code
            break;
        default:
        alert('sorry deze optie is nog in progress')
    }


}





function createOngesorteerdeArray(){
    arrLenght = parseInt(inputLenghtArray.value)
    ongesorteerdeArray = [];
    for(let y = 0 ; y < arrLenght ; y++){
            ongesorteerdeArray.push((Math.floor(Math.random() * 50)));
    }
    if(ongesorteerdeArray.length === arrLenght){
        arrLenght = 0 ;
        arrayToRender = ongesorteerdeArray
        grid.innerHTML =  maakGrid();
        btn_Start.addEventListener('click',btnStartClicked )
    }

}
function maakGrid(){
    let index = ''
    for(let i = 0; arrayToRender.length  > i ; i++){
        index += `<div class="grid-element" id="${i}"><span>${arrayToRender[i]}</span></div>`
    }
    return index
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
function sortArray_bubbleSort(){
    console.time('timer')
    btn_Start.removeEventListener('click',btnStartClicked )
    bubbleSort()
    function bubbleSort() {
        if (currentIndex === arrayToRender.length - 1) {
            currentIndex = 0
            isLaatse = true
        }
        let eersteWaarde = arrayToRender[currentIndex]
        let tweedeWaarde = arrayToRender[currentIndex + 1]
//        console.log('eersteWaarde:', eersteWaarde)
//        console.log('tweedeWaarde:', tweedeWaarde)
//        console.log(currentIndex)
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
//        console.log(result)
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
        if(gesorteerdeArray !== arrayToRender.length){
            setTimeout(bubbleSort, 100)
        }
        else if(gesorteerdeArray === arrayToRender.length){

            console.timeEnd('timer')

            let alleDivs = document.querySelectorAll('.grid-element');
            alleDivs.forEach(div => {
                if( div.classList.contains('current')){
                    document.getElementById(`${div.id}`).classList.remove('current')
                }
                else if( div.classList.contains('green')){
                    document.getElementById(`${div.id}`).classList.remove('green')
                }
            })
        }
    }
}




