//import data from '../data/pokemon/pokemon.js';

const Card = () => {
    const card = document.createElement('div');
    card.class = 'memorycard';
    //card.setAttribute("id", `${e.id}`);
    return card;
}

//export default Card;
const FrontCard = () => {
    const front = document.createElement('img')
    front.class = 'front-card';
    //front.src = `${data.image}`
    //front.style.background = `${data.bgColor}`
    return front;
}

const BackCard = () => {
    const back = document.createElement('img')
    back.class = 'back-card';
    //back.src = `${gameImage}`
    return back;
}

export { Card, FrontCard, BackCard };