import {gameThemes} from './components/GameThemes.js';

// vista de  juegos por tematica
const pageOne = document.getElementById("pageOne");
// vista de la pagina 2
const pageTwoGame = document.getElementById("pageTwo");

// lista de las opciones de juego
const listOfGames = document.querySelectorAll("div[id^=choose]")
// evento que que lleva a los juegos y muentra las cartas
for (let i = 0; i < listOfGames.length; i++) {
    listOfGames[i].addEventListener('click', () => {
        for (let j = 0; j < gameThemes.length; j++) {
            if (i == j) {
                pageTwoGame.style.display = "";
                pageOne.style.display = "none";
                return gameThemes[j]();
            }
        }
    });
}