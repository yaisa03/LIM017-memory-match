//funcion que crea las cartas
export function createCards(data, gameImage) {
    let newData = data.concat(data); // dos veces la data
    let gameGrid = shuffle(newData);
    let cardsDiv = "";
    gameGrid.map(e => {
        cardsDiv += `<div id="${e.id} class="memorycard">
                        <img class="front-card" src="${e.image}" style="background:${e.bgColor}">
                        <img class="back-card" src="${gameImage}">
                    </div>`
    });
    return cardsDiv; // shuffle(cardsDiv)
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



