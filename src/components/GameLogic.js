import { AudioController } from './audioController.js'
// variables
let flippedCard = false;
let firstCard, secondCard;
export let audioController = new AudioController();
let lockBoard = false; // evitar que se giren mas de 2 cartas
let correctCards = 0;

export function flipCard() {
    if (lockBoard) return; // si el tablero esta bloqueado
    if (this === firstCard) return; // doble click, si this es igual a la 1ra carta no corre la funcion

    this.classList.add('flipped');
    if (!flippedCard) { // primer click
        flippedCard = true;
        firstCard = this;
        audioController.flip();
    } else { // segundo click
        // flippedCard = false;
        secondCard = this;
        audioController.flip();
        checkMatch(); // ver si son match
    }
}

function checkMatch() { // operador ternario
    (firstCard.id === secondCard.id) ? disableCards() : unflipCards();
}

function disableCards() { // es un match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    correctCards += 2;
    audioController.match();
    return correctCards;
}

function unflipCards() { //no es un match
    lockBoard = true; //lock the board

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        // lockBoard = false; // unlock the board
        resetBoard();
    }, 1500);
}

function resetBoard() { //es6 destructuring assignment
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// shuffle
export function shuffle(a) { //Fisher–Yates shuffle
    for (let i = a.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const y = a[randomIndex]
        a[randomIndex] = a[i]
        a[i] = y
    }
    return a;
}
// cantidad de cartas por nivel de juego
export function sliceData(gameLevel, gameData) {
    let slicedData;
    if (gameLevel == 0) {
        slicedData = shuffle(gameData).slice(0, 3);
    } else if (gameLevel == 1) {
        slicedData = shuffle(gameData).slice(0, 6);
    } else {
        slicedData = shuffle(gameData).slice(0, 9);
    }
    return slicedData;
}

export { correctCards };