import { shuffle } from './GameLogic.js';

//funcion que crea las cartas
export function createCards(newData, gameImage) {
    let dataConcat = newData.concat(newData); // dos veces la data
    dataConcat = shuffle(dataConcat);
    let cardsDiv = "";
    dataConcat.map(e => {
        cardsDiv += `<div id="${e.id}" class="memorycard">
                        <img class="front-card" src="${e.image}" style="background:${e.bgColor}">
                        <img class="back-card" src="${gameImage}" style="background: #DADBBD">
                    </div>`
    });
    return cardsDiv;
}

export const winnerMessage = `<dialog id="ms">
           <h2>¡Ganaste!</h2>
           <button id="scoreBoard">Ver Puntaje!</button>
           <button id="playAgain">Volver a Jugar!</button>
           </dialog>`;

export const timeOutMessage = `<dialog id="ms">
           <h2>Se acabo el tiempo :(</h2>
           <button id="playAgain">Volver a Jugar!</button>
           </dialog>`;

export function scoreBoard() {
    let board = `<div id="scoreboard">
           <h1>¡Puntajes!</h1>
           <p></p>
           <p></>
           </div>`;
    return board;
}
