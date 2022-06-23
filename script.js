
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
let itererendeIndex = 0

window.onload = function (){
    createSelect();
    createOngesorteerdeArray()
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
            btn_Start.removeEventListener('click',btnStartClicked )
            sortArray_bubbleSort();
            break;
        case('Selection Sort'):
            btn_Start.removeEventListener('click',btnStartClicked )
            sortArray_SelectionSort()
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
    arrLenght = 6
    if(parseInt(inputLenghtArray.value) > 0){
        arrLenght = parseInt(inputLenghtArray.value)
    }
    ongesorteerdeArray = [];
    arrayToRender = [];
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

// vergelijkt 2 waarde en geeft -1 , 0 , 1 terug
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

function sortArray_SelectionSort() {
    // neemt het element op index 0
    // gaat over de array en zoekt de laatste waarden
    // als deze lager is dan element op index 0 -> wissel
    // index ++
    // gaat altijd over de hele array BUTTEN wat al gesorteerd is
    currentIndex = 0
    itererendeIndex = 0
    let laagsteWaarde = null;
    selectionSort()

    function selectionSort() {
        if (laagsteWaarde === null) {
            laagsteWaarde = arrayToRender[currentIndex]
        }
        let currentWaarde = arrayToRender[currentIndex]  // eerste waarde
        let itererendeWaarde = arrayToRender[itererendeIndex]
        document.getElementById(`${currentIndex}`).classList.add('yellow')
        if (currentIndex !== itererendeIndex){
            document.getElementById(`${itererendeIndex}`).classList.add('green')
        }


        if (itererendeWaarde >= laagsteWaarde) {
            itererendeIndex++
            document.getElementById(`${itererendeIndex - 1}`).classList.remove('green')
            if(itererendeIndex <= arrayToRender.length -1){
                document.getElementById(`${itererendeIndex}`).classList.add('green')
            }

        }
        else if (itererendeWaarde < laagsteWaarde) {
            let alleDivs = document.querySelectorAll('.grid-element');
            alleDivs.forEach(div => {
                if( div.classList.contains('red')){
                    document.getElementById(`${div.id}`).classList.remove('red')
                }
            })
            document.getElementById(`${itererendeIndex}`).classList.add('red')
            laagsteWaarde = arrayToRender[itererendeIndex]
            itererendeIndex++
            document.getElementById(`${itererendeIndex - 1}`).classList.remove('green')
            if(itererendeIndex <= arrayToRender.length -1){
                document.getElementById(`${itererendeIndex}`).classList.add('green')
            }
        }

        if (itererendeIndex !== arrayToRender.length) {
            setTimeout(selectionSort, 1000)

        }
        else if (itererendeIndex === arrayToRender.length) {
            let result = compere(currentWaarde, laagsteWaarde)
            ///currentWaarde > laagsteWaarde
            if (result === 1) {
                // omdraaien visueel
                let alleDivs = document.querySelectorAll('.grid-element');
                alleDivs.forEach(div => {
                    if( div.classList.contains('red')){
                        document.getElementById(`${div.id}`).classList.remove('red')
                        document.getElementById(`${div.id}`).innerText = currentWaarde
                        arrayToRender[`${div.id}`] = currentWaarde;
                    }
                })
                document.getElementById(`${currentIndex}`).innerText = laagsteWaarde

                arrayToRender[currentIndex] = laagsteWaarde;

                console.log(arrayToRender)


            }

console.log(arrayToRender)
            if (currentIndex !== arrayToRender.length - 1) {
                currentIndex++
                itererendeIndex = currentIndex;
                laagsteWaarde = null
                setTimeout(selectionSort, 1000)
            }
            else if (currentIndex === arrayToRender.length - 1) {
                alert('einde')

            }


        }
    }

}

// bubble sort
function sortArray_bubbleSort(){
    // bubbel sort pakt de waarden op index  0 en 1 en vergelijkt deze
    // dan  1 en 2 en vergelijkt deze
    // dan  2 en 3 en vergelijkt deze
    // ....
    // gaat altijd over de hele array
    currentIndex = 0;
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
            document.getElementById(`${currentIndex - 1}`).classList.remove('red')
            document.getElementById(`${currentIndex}`).classList.remove('green')
        }
        if (isLaatse === true) {
            document.getElementById(`${arrayToRender.length - 2}`).classList.remove('red')
            document.getElementById(`${arrayToRender.length - 1}`).classList.remove('green')
            isLaatse = false
        }
        isEerst = false
        document.getElementById(`${currentIndex}`).classList.add('red')
        document.getElementById(`${currentIndex + 1}`).classList.add('green')

        let result = compere(eersteWaarde, tweedeWaarde)
//        console.log(result)
        if (result === 1) {
            document.getElementById(`${currentIndex}`).innerText = tweedeWaarde
            document.getElementById(`${currentIndex + 1}`).innerText = eersteWaarde

            arrayToRender[currentIndex] = tweedeWaarde;
            arrayToRender[currentIndex + 1] = eersteWaarde;

            gesorteerdeArray = 0
        }
        else if (result === 0) {
            document.getElementById(`${currentIndex + 1}`).innerText = tweedeWaarde
            document.getElementById(`${currentIndex}`).innerText = eersteWaarde

            arrayToRender[currentIndex + 1] = tweedeWaarde;
            arrayToRender[currentIndex] = eersteWaarde;

            gesorteerdeArray++
        }

        currentIndex++

        // volgende iteratie
        if(gesorteerdeArray !== arrayToRender.length){
            setTimeout(bubbleSort, 150)
        }

        // klaar met sorteren
        else if(gesorteerdeArray === arrayToRender.length){
            isEerst = true
            let alleDivs = document.querySelectorAll('.grid-element');
            alleDivs.forEach(div => {
                if( div.classList.contains('red')){
                    document.getElementById(`${div.id}`).classList.remove('red')
                }
                else if( div.classList.contains('green')){
                    document.getElementById(`${div.id}`).classList.remove('green')
                }
            })
        }
    }
}




