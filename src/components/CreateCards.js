//funcion que crea las cartas
export function createCards(newData, gameImage) {
    let dataConcat = newData.concat(newData); // dos veces la data
    dataConcat = shuffle(dataConcat);
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

export function shuffle(a) { //Fisher–Yates shuffle
    for (let i = a.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const y = a[randomIndex]
        a[randomIndex] = a[i]
        a[i] = y
    }
    return a;
}

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

export function winnerMessage() {
    let message = `<dialog id="ms">
           <h2>¡Ganaste!</h2>
           <button id="scoreBoard">Ver Puntaje!</button>
           <button id="playAgain">Volver a Jugar!</button>
           </dialog>`;
    return message;
}

export function timeOutMessage() {
    let message = `<dialog id="ms">
           <h2>Se acabo el tiempo :(</h2>
           <button id="playAgain">Volver a Jugar!</button>
           </dialog>`;
    return message;
}

export function scoreBoard() {
    let board = `<div id="scoreboard">
           <h1>¡Puntajes!</h1>
           <p></p>
           <p></>
           </div>`;
    return board;
}
