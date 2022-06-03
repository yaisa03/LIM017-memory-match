import { createCards, endMessage /*winnerMessage, scoreBoard/* , timeOutMessage */ } from './components/CreateElements.js';
import { gameThemes } from './components/GameThemes.js'; // contiene la data de los juegos
import { flipCard, audioController, sliceData, correctCards } from './components/GameLogic.js';

// contiene las opciones de juego
const gameOptions = document.querySelectorAll('div[id^="game"]');
// Paginas
const pageOne = document.getElementById('pageOne');
const pageTwo = document.getElementById('pageTwo');
// titulo del tema de juego
const titlePage2 = document.getElementById('titlePage2');
// elegir nivel de juego
const selectLevel = document.getElementById('selectLevel'); // contenedor
const levelSelected = document.querySelectorAll('[id^="option"]') // botones de cada opcion
let setTimer = document.getElementById('time'); // contador de tiempo restante
const flippedCards = document.getElementById('flips');
let totalClicks = 0; // cantidad de cartas giradas
// contenedores de los niveles del juego 
const gameContainers = document.querySelectorAll('div[id^="level"]');
// variables del tema elegido
let gameData, gameImage, gameTitle, slicedData;
//variables del timer
let [m, s] = [0, 0];
let mAux, sAux;

// boton para volver a inicio
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => location.reload());

// elegir tema del juego
export function chooseGameTheme() {
    gameOptions.forEach(e => {
        e.addEventListener('click', () => {
            for (let i = 0; i < gameOptions.length; i++) {
                if (gameOptions[i] === e) {  /// i es la tema de juego elegodo
                    selectLevel.style.display = "";
                    gameData = gameThemes[i].data;
                    gameImage = gameThemes[i].image;
                    gameTitle = gameThemes[i].title;
                    gameOptions[i].style.display = "none";
                } else { // temas de juego no elegidos
                    gameOptions[i].style.display = "none";
                }
            }
        })
    })
}
// elegir nivel de juego
export function showGamesByLevel() {
    for (let i = 0; i < levelSelected.length; i++) {
        levelSelected[i].addEventListener('click', () => {
            slicedData = sliceData(i, gameData); // i es el nivel de juego elegido 
            const gameContainer = gameContainers[i]; // contenedor del nivel elegido
            pageOne.style.display = "none";
            pageTwo.style.display = "";
            titlePage2.innerText = gameTitle;
            gameContainer.style.display = "";
            gameContainer.innerHTML = createCards(slicedData, gameImage);
            audioController.startMusic();
            flipCards();
            timer();
            return slicedData;
        })
    }
}
// funcion que activa juego
function flipCards() { // cartas de juego
    const cards = document.querySelectorAll('.memorycard');
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
        card.addEventListener('click', flippedCardsCounter);
        //card.addEventListener('click', timeOut);
        card.addEventListener('click', gameOver);
    });
}
// contador de cartas giradas
function flippedCardsCounter() {
    totalClicks++;
    flippedCards.innerHTML = totalClicks;
    return totalClicks;
}

// funcion para terminar el juego cuando todas las cartas son correctas
export function gameOver() {
    const data = slicedData.concat(slicedData)
    if (data.length === correctCards) {
        audioController.victory();
        document.getElementById('pageTwo').innerHTML = endMessage(mAux + ":" + sAux, totalClicks);
        document.getElementById('playAgain').addEventListener('click', () => location.reload()); // elegir otro tema
    }
}

// funcion para terminar el juego cuando se acaba el tiempo
export const timer = () => {
    timerConfig();
    setInterval(timerConfig, 1000);
}

function timerConfig() {
    s++;
    if (s > 59) { m++; s = 0; }

    if (s < 10) { sAux = "0" + s; } else { sAux = s; }
    if (m < 10) { mAux = "0" + m; } else { mAux = m; }

    setTimer.innerHTML = mAux + ":" + sAux;
    return mAux, sAux;
}

// inicializar funciones
chooseGameTheme();
showGamesByLevel();

export { slicedData };


