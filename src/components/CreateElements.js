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

export function endMessage(time, cardsFlipped) {
    const endGame = `<div id="endGameMessage">
           <h1>Tu tiempo fue</h1>
           <p class='endTime'>${time}</p>
           <p class='endTime cards'>Giraste ${cardsFlipped} cartas</p>
           <button id="playAgainBtn">Volver a Jugar!</button>
           </div>`;
    return endGame;
}
