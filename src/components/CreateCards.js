

//funcion que crea las cartas
const createCards = (data, gameImage, gameContainer) => {
    let newData = data.concat(data); // dos veces la data
    let gameGrid = shuffle(newData); // orden random de la data

    gameGrid.map((e) => {
        // crear carta
        const card = document.createElement('div');
        card.classList.add('memorycard');
        card.setAttribute("id", `${e.id}`);
        // frente de la carta
        const front = document.createElement('img');
        front.classList.add('front-card');
        front.src = `${e.image}`
        front.style.background = `${e.bgColor}`
        // reverso de la carta
        const back = document.createElement('img');
        back.classList.add('back-card');
        back.src = `${gameImage}`
        // ingresar la data al contenedor
        gameContainer.appendChild(card)
        card.appendChild(front)
        card.appendChild(back)
    });
    return gameContainer;
}

function shuffle(a) { //Fisher–Yates shuffle
    for (let i = a.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const y = a[randomIndex]
        a[randomIndex] = a[i]
        a[i] = y
    }
    return a;
}

export default createCards;