import webdev from '../data/webdev/webdev.js';
import pokemon from '../data/pokemon/pokemon.js';
import ghibli from '../data/ghibli/ghibli.js';
// contendores de las cartas
import { containerPokemon, containerWebDev, containerGhibli } from './GameContainer.js'; 
import { createCards } from './CreateCards.js';
export { gameThemes };

const title2 = document.getElementById("title2");
const pageTwoGame = document.getElementById("pageTwo");
// data importada
const dataWebDev = webdev.items;
const dataPokemon = pokemon.items;
const dataGhibli = ghibli.items;

const gameThemes = [
    function gameGhibli() {  // Funcion para el juego Ghibli
        const imageGameGhibli = "images/gameGhibli.png"; // imagen del back-card
        title2.innerText = "Studio Ghibli Memory Match";
        pageTwoGame.appendChild(containerGhibli());
        document.getElementById("containerGameGhibli").innerHTML = createCards(dataGhibli, imageGameGhibli);
    },
    function gamePokemon() { // Funcion para juego Pokemon
        const imageGamePokemon = "images/gamePokemon.png"; // imagen del back-card
        title2.innerText = "Pokemon Memory Match";
        pageTwoGame.appendChild(containerPokemon());
        document.getElementById("containerGamePokemon").innerHTML = createCards(dataPokemon, imageGamePokemon);
    },
    function gameWebDev() { // Funcion para juego web development
        const imageGameWebDev = "images/gameWebDev.png"; // imagen del back-card
        title2.innerText = "Web Development Memory Match";
        pageTwoGame.appendChild(containerWebDev());
        document.getElementById("containerGameWebDev").innerHTML = createCards(dataWebDev, imageGameWebDev);
    }
];
