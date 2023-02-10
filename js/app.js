console.log('Prato minato')

let cellSide = 10
console.log(cellSide)

let cellNumber = cellSide * cellSide
console.log(cellNumber)

let gridElement = document.getElementById('grid')
console.log(gridElement)

// crea un array per generare numeri casuali
let bombs = [];
console.log(bombs);

let score = 0;
console.log(score)

const startButton = document.querySelector('.start-button')
console.log(startButton)

startButton.addEventListener('click', function () {

    //reset griglia ad ogni click
    gridElement.innerHTML = '';

    //genera numeri casuali
    while (bombs.length < 16) {
        let randomNumber = Math.floor(Math.random() * cellNumber) + 1;
        console.log(randomNumber)

        if(!bombs.includes(randomNumber)){
            bombs.push(randomNumber)
        }
    }

    // creo elementi del DOM

    for (let i = 0; i < cellNumber; i++) {
        let number = i + 1;
        console.log(number);

        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `calc(100% / ${cellSide})`;
        cell.innerHTML = number;

        gridElement.appendChild(cell);
    }

    const cellElements = document.querySelectorAll('.cell')
    // console.log(celleElements)

    for (let i = 0; i < cellElements.length; i++) {
        const singleCell = cellElements[i]

        singleCell.addEventListener('click', function () {
            console.log(i + 1)

            if (singleCell.style.backgroundColor === "purple") {
                singleCell.style.backgroundColor = "";
            } else {
                singleCell.style.backgroundColor = "purple";
            }
        })
    }
})


function onClick() {
    console.log(i + 1)
}