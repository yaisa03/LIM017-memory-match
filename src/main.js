//import webdeb from './data/webdeb/webdeb.js';
import pokemon from './data/pokemon/pokemon.js';
//import ghibli from './data/ghibli/ghibli.js';

/*data importada
const dataWbDeb = webdeb.items;*/
const dataPokemon = pokemon.items;
//const dataGhibli = pokemon.items;

/*vista de los juegos por tematica*/
const memoryGameOptions = document.getElementById("memoryGameOptions");
/*texto de bienvenida*/
const title = document.getElementById("title");
//vista de la pagina 2
const pageTwoGame = document.getElementById("pageTwo");
//contendor de las cartas
const gameContainer = document.getElementById("gameContainer");
//Timer y numero de flips de las cartas
const gameInfo = document.querySelector(".gameInfoContainer");


/*funcion que crea las cartas*/
function showCards(data, gameImage) {
    let cardsDiv = "";
    data.forEach(e => {
        cardsDiv += `<div id="${e.id} class="memorycard">
                        <img class="front-card" src="${e.image}">
                        <img class="back-card" src="${gameImage}">
                    </div>
                    <div id="${e.id} class="memorycard">
                        <img class="front-card" src="${e.image}">
                        <img class="back-card" src="${gameImage}">
                    </div>`
        gameContainer.innerHTML = cardsDiv;
    });
    return cardsDiv;
}

//Juego de tematica POKEMON
//imagen de la carta de atras para el juego
const imageGamePokemon = "images/gamePokemon.png";
//para seleccionar el juego
const choosePokemon = document.getElementById("choosePokemon"); //contenedor
choosePokemon.addEventListener('click', () => { //evento que inicia
    pageTwoGame.style.display = "";
    gameInfo.style.display="";
    title.innerText= "Pokemon Memory Match";
    memoryGameOptions.style.display = "none";
    showCards(dataPokemon, imageGamePokemon);
    //funcion que chocolatea cartas, el resultado va a gamePokemon
});
//const gameStudioGhibli = document.getElementById("gameStudioGhibli");
//const gameWebDeb = document.getElementById("gameWebDeb");


