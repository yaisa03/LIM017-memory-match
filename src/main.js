import { createCards, sliceData } from './components/CreateCards.js';
import { gameThemes } from './components/GameThemes.js'; // contiene la data de los juegos
import { flipCard } from './components/GameLogic.js';
// contiene las opciones de juego
const gameOptions = document.querySelectorAll('div[id^="game"]');
// boton para volver a inicio
const homeButton = document.getElementById('home');
// Paginas
const pageOne = document.getElementById('pageOne');
const pageTwo = document.getElementById('pageTwo');
const titlePage2 = document.getElementById('titlePage2');
// elegir nivel de juego
const selectLevel = document.getElementById('selectLevel'); // contenedor
const levelSelected = document.querySelectorAll('[id^="option"]') // cada opcion
// contenedores de los niveles del juego 
const gameContainers = document.querySelectorAll('div[id^="level"]');
// variables del tema elegido
let gameData, gameImage, gameTitle;

homeButton.addEventListener('click', () => {
    location.reload();
});
// elegir tema del juego
gameOptions.forEach(e => {
    e.addEventListener('click', () => {
        for (let i = 0; i < gameOptions.length; i++) {
            if (gameOptions[i] === e) { // i es la tema de juego elegodo
                selectLevel.style.display = "";
                gameData = gameThemes[i].data;
                gameImage = gameThemes[i].image;
                gameTitle = gameThemes[i].title;
                // gameOptions[i].style.display = "none";
            } else { // temas de juego no elegidos
                gameOptions[i].style.display = "none";
            }
        }
    })
})
// elegir nivel de juego
for (let i = 0; i < levelSelected.length; i++) {
    levelSelected[i].addEventListener('click', () => {
        const slicedData = sliceData(i, gameData); // i es el nivel de juego elegido 
        const gameContainer = gameContainers[i]; // contenedor del nivel elegido
        pageOne.style.display = "none";
        pageTwo.style.display = "";
        titlePage2.innerText = gameTitle;
        gameContainer.style.display = "";
        gameContainer.innerHTML = createCards(slicedData, gameImage);
        // cartas de juego
        const cards = document.querySelectorAll('.memorycard');
        cards.forEach(card => {
            card.addEventListener('click', flipCard);
        });
    })
}
