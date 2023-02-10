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

// creo evento legato al pulsante play

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

    //aggiungo l'evento click alle celle

    const cellElements = document.querySelectorAll('.cell')

    for (let i = 0; i < cellElements.length; i++) {
        const singleCell = cellElements[i]

        singleCell.addEventListener('click', function (event) {
        console.log(event)

        let userClick = event.target
        console.log(userClick)

        //Quando l’utente clicca su una cella: 

            //se il numero della cella è presente nella lista dei numeri generati - 
            //abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina

        if(bombs.includes(i + 1)){

            userClick.style.backgroundColor = 'red';
            alert('GAME OVER! Hai trovato una bomba, riprova!');

            //Altrimenti la cella cliccata si colora di viola e l’utente può continuare a cliccare sulle altre celle.
        }else if (score === cellNumber - 16){

            userClick.style.backgroundColor = 'purple';
            score++;

        }else{

            alert('COMPLIMENTI! HAI VINTO!' + score);
        }
           
        })
    }

    //reset score
    score = 0
})


function onClick() {
    console.log(i + 1)
}