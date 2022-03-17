import { createCards, shuffle } from './components/CreateCards.js';
import { gameThemes } from './components/GameThemes.js';

// contiene las opciones de juego
const gameOptions = document.querySelectorAll('div[id^="game"]');
// navegador
const nav = document.getElementById('navigator');
// Paginas
const pageOne = document.getElementById('pageOne');
const pageTwo = document.getElementById('pageTwo');
// elegir nivel de juego
const selectLevel = document.getElementById('selectLevel');
const levelSelected = document.querySelectorAll('[id^="option"]')
// contenedores de los juegos por nivel 
const gameContainers = document.querySelectorAll('div[id^="level"]');
// variables
let gameChosen, gameLevel, gameData, gameImage, slicedData, gameContainer;

gameOptions.forEach(e => {
    e.addEventListener('click', () => {
        for (let i = 0; i < gameOptions.length; i++) {
            nav.style.display = "";
            if (gameOptions[i] == e) {
                selectLevel.style.display = "";
                gameChosen = i;
                gameData = gameThemes[i].data;
                gameImage = gameThemes[i].image;
            } else {
                gameOptions[i].style.display = "none";
            }
        }
        return gameChosen;
    })
})

for (let i = 0; i < levelSelected.length; i++) {
    levelSelected[i].addEventListener('click', () => {
        gameLevel = i; // nivel de juego elegido , es lo que muestra el contenedor
        gameContainer = gameContainers[i];
        if (gameLevel == 0) {
            slicedData = shuffle(gameData).slice(0, 3);
        } else if (gameLevel == 1) {
            slicedData = shuffle(gameData).slice(0, 6);
        } else {
            slicedData = shuffle(gameData).slice(0, 9);
        }
        pageOne.style.display = "none";
        pageTwo.style.display = "";
        gameContainer.style.display = "";
        gameContainer.innerHTML = createCards(slicedData, gameImage);
        return gameContainer;
    })
}
