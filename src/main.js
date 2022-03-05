//import webdeb from './data/webdeb/webdeb.js';
import pokemon from './data/pokemon/pokemon.js';
//import ghibli from './data/ghibli/ghibli.js';

/*data importada
const dataWbDeb = webdeb.items;*/
const dataPokemon = pokemon.items;
//const dataGhibli = pokemon.items;

/*vista de los juegos por tematica*/
const memoryGameOptions = document.getElementById("memoryGameOptions");

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
        gamePokemon.innerHTML = cardsDiv;
    });
    return cardsDiv;
}

//Juego de tematica POKEMON
//contendor de las cartas
let gamePokemon = document.getElementById("gamePokemon");
//imagen de la carta de adelante para el juego
const imageGamePokemon = "images/gamePokemon.png";
//para seleccionar el juego
const choosePokemon = document.getElementById("choosePokemon"); //contenedor
choosePokemon.addEventListener('click', () => { //evento que inicia
    gamePokemon.style.display = "";
    memoryGameOptions.style.display = "none";
    showCards(dataPokemon, imageGamePokemon);
    //funcion que chocolatea cartas, el resultado va a gamePokemon
});
//const gameStudioGhibli = document.getElementById("gameStudioGhibli");
//const gameWebDeb = document.getElementById("gameWebDeb");


