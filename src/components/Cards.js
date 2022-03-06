//funcion que crea las cartas
function showCards(data, gameImage, gameContainer) {
    let cardsDiv = "";
    data.forEach(e => {
        cardsDiv += `<div id="${e.id} class="memorycard">
                        <img class="front-card" src="${e.image}" style="background:${e.bgColor};">
                        <img class="back-card" src="${gameImage}" >
                    </div>
                    <div id="${e.id} class="memorycard">
                        <img class="front-card" src="${e.image}" style="background-color:${e.bgColor};">
                        <img class="back-card" src="${gameImage}">
                    </div>`
        gameContainer.innerHTML = cardsDiv;
    });
    return cardsDiv;
}

export default showCards;