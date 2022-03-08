import webdev from './data/webdev/webdev.js';
import pokemon from './data/pokemon/pokemon.js';
import ghibli from './data/ghibli/ghibli.js';
import createCards from './components/CreateCards.js';
// contendores de las cartas
import { containerPokemon, containerWebDev, containerGhibli } from './components/GameContainer.js'; 
// data importada
const dataWebDev = webdev.items;
const dataPokemon = pokemon.items;
const dataGhibli = ghibli.items;

// vista de  juegos por tematica
const pageOne = document.getElementById("pageOne");
// titulo de los juegos
const title2 = document.getElementById("title2");
// vista de la pagina 2
const pageTwoGame = document.getElementById("pageTwo");
// Timer y numero de flips de las cartas
const gameInfo = document.querySelector(".gameInfoContainer");
// lista de las opciones de juego
const listOfGames = document.querySelectorAll("div[id^=choose]")
// evento que que lleva a los juegos
// function showCards(array) {
for (let i = 0; i < listOfGames.length; i++) {
    listOfGames[i].addEventListener('click', () => {
        for (let j = 0; j < array.length; j++) {
            if (i == j) {
                pageTwoGame.style.display = "";
                gameInfo.style.display = "";
                pageOne.style.display = "none";
                return array[j]();
            }
        }
    });
}
// }
// funciones que crean las vistas de los juegos
const array = [
    function gameWebDev() { // Funcion para juego web development
        const imageGameWebDev = "images/gameWebDev.png"; // imagen del back-card
        title2.innerText = "Web Development Memory Match";
        createCards(dataWebDev, imageGameWebDev, containerWebDev(pageTwoGame));
    },
    function gamePokemon() { // Funcion para juego Pokemon
        const imageGamePokemon = "images/gamePokemon.png"; // imagen del back-card
        title2.innerText = "Pokemon Memory Match";
        createCards(dataPokemon, imageGamePokemon, containerPokemon(pageTwoGame));
    },
    function gameGhibli() {  // Funcion para el juego Ghibli
        const imageGameGhibli = "images/gameGhibli.png"; // imagen del back-card
        title2.innerText = "Studio Ghibli Memory Match";
        createCards(dataGhibli, imageGameGhibli, containerGhibli(pageTwoGame));
    }
];
