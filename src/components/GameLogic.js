import { slicedData } from '../main.js';
import { winnerMessage, scoreBoard, timeOutMessage } from './CreateElements.js';
import { AudioController } from './audioController.js'
// variables
let flippedCard = false;
let firstCard, secondCard;
export let audioController = new AudioController();
let lockBoard = false; // evitar que se giren mas de 2 cartas
let correctCards = 0;
let setTimeOver = document.getElementById('time');

export function flipCard() {
    if (lockBoard) return; // si el tablero esta bloqueado
    if (this === firstCard) return; // doble click, si this es igual a la 1ra carta no corre la funcion

    this.classList.add('flipped');
    if (!flippedCard) { // primer click
        flippedCard = true;
        firstCard = this;
        audioController.flip();
        // timeOut();
    } else { // segundo click
        // flippedCard = false;
        secondCard = this;
        audioController.flip();
        // ver si son match
        checkMatch();
    }
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
    audioController.match();
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
        audioController.victory();
        setTimeout(() => {
            document.getElementById('pageTwo').innerHTML += winnerMessage();
            document.getElementById('ms').showModal();
            clearTimeout(timeOut());
            document.getElementById('scoreBoard').addEventListener('click', () => {
                document.getElementById('ms').remove();
                document.getElementById('pageTwo').innerHTML = scoreBoard(); // ver puntaje
            });
            document.getElementById('playAgain').addEventListener('click', () => {
                document.getElementById('ms').remove();
                location.reload(); // elegir otro tema
            });
        }, 1000);
    }
}

export const timeOut = () => {
    let timeLeft = setTimeOver.innerHTML;
    setInterval(() => {
        timeLeft--;
        setTimeOver.innerHTML = timeLeft;
        if (timeLeft === 0) {
            setTimeOver.innerHTML = 0;
            audioController.gameOver();
            document.getElementById('pageTwo').innerHTML += timeOutMessage();
            document.getElementById('ms').showModal();
            document.getElementById('playAgain').addEventListener('click', () => {
                document.getElementById('ms').remove();
                location.reload(); // elegir otro tema
            });
        }
    }, 1000);
}
