
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // evitar que se giren mas de 2 cartas

export function flipCard() {
    if(lockBoard) return; // si el tablero esta bloqueado
    if (this === firstCard) return; // si se da click 2 veces sobre la misma carta
    // si this es igual a la 1ra carta no corre la funcion
    this.classList.add('flipped');
    if (!flippedCard) {
        // primer click
        flippedCard = true;
        firstCard = this;

    } else { // segundo click
        // flippedCard = false;
        secondCard = this;
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
    console.log('es un match');
    resetBoard();
}

function unflipCards() {
    lockBoard = true; //lock the board

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        console.log('no es un match');
        // lockBoard = false; // unlock the board
        resetBoard();
    }, 1500);
}

function resetBoard() { //es6 destructuring assignment
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}