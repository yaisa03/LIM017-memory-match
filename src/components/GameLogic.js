import { slicedData } from '../main.js'
import { winnerMessage } from './CreateCards.js'
// variables
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // evitar que se giren mas de 2 cartas
let totalClicks = 0;
let correctCards = 0;
const flippedCards = document.getElementById('flips');

export function flipCard() {
    if (lockBoard) return; // si el tablero esta bloqueado
    if (this === firstCard) return; // si se da click 2 veces sobre la misma carta
    // si this es igual a la 1ra carta no corre la funcion
    this.classList.add('flipped');
    if (!flippedCard) {
        // primer click
        flippedCard = true;
        firstCard = this;
        totalClicks++;
        flippedCards.innerHTML = totalClicks;

    } else { // segundo click
        // flippedCard = false;
        secondCard = this;
        totalClicks++;
        flippedCards.innerHTML = totalClicks;
        // ver si son match
        checkMatch();
    }
    return totalClicks;
}

function checkMatch() { // operador ternario
    (firstCard.id === secondCard.id) ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    // console.log('es un match');
    resetBoard();
    correctCards += 2;
    gameOver();
    return correctCards;
}

function unflipCards() {
    lockBoard = true; //lock the board

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        // console.log('no es un match');
        // lockBoard = false; // unlock the board
        resetBoard();
    }, 1500);
}

function resetBoard() { //es6 destructuring assignment
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function gameOver() {
    const data = slicedData.concat(slicedData)
    if (data.length === correctCards) {
        setTimeout(() => {
            document.getElementById('pageTwo').innerHTML+=winnerMessage();
            document.getElementById('ms').showModal();
            document.getElementById('close').addEventListener('click',()=>{
                document.getElementById('ms').remove();
                // location.reload();
                // volver a jugador
                // elegir otro tema
            });
        }, 1000);
    }
}
