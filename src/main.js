import { createCards, winnerMessage, scoreBoard, timeOutMessage } from './components/CreateElements.js';
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
const timeOverByLevel = document.getElementById('time'); // Contador por nivel
let setTimeOver = document.getElementById('time'); // contador de tiempo restante
const flippedCards = document.getElementById('flips');
let totalClicks = 0; // cantidad de cartas giradas
// contenedores de los niveles del juego 
const gameContainers = document.querySelectorAll('div[id^="level"]');
// variables del tema elegido
let gameData, gameImage, gameTitle, slicedData;

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
            setTimeout(i);
            gameContainer.style.display = "";
            gameContainer.innerHTML = createCards(slicedData, gameImage);
            audioController.startMusic();
            flipCards();
            return slicedData;
        })
    }
}
// activa juego que
function flipCards() {
    // cartas de juego
    const cards = document.querySelectorAll('.memorycard');
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
        card.addEventListener('click', flippedCardsCounter);
        card.addEventListener('click', timeOut);
        card.addEventListener('click', gameOver);
    });
}
// contador de cartas giradas
function flippedCardsCounter() {
    totalClicks++;
    flippedCards.innerHTML = totalClicks;
    return totalClicks;
}
// settear tiempo de juego
function setTimeout(i) {
    if (i === 0) {
        timeOverByLevel.innerHTML = 60;
    } else if (i === 1) {
        timeOverByLevel.innerHTML = 90;
    } else {
        timeOverByLevel.innerHTML = 120;
    }
}
// funcion para terminar el juego cuando todas las cartas son correctas
export function gameOver() {
    const data = slicedData.concat(slicedData)
    if (data.length === correctCards) {
        audioController.victory();
        document.getElementById('pageTwo').innerHTML += winnerMessage;
        document.getElementById('ms').showModal();
        document.getElementById('scoreBoard').addEventListener('click', () => {
            document.getElementById('ms').remove();
            document.getElementById('pageTwo').innerHTML = scoreBoard(); // ver puntaje
        });
        document.getElementById('playAgain').addEventListener('click', () => {
            document.getElementById('ms').remove();
            location.reload(); // elegir otro tema
        });
    }
}

// funcion para terminar el juego cuando se acaba el tiempo
export const timeOut = () => {
    const data = slicedData.concat(slicedData)
    let timeLeft = setTimeOver.innerHTML;
    const timeOver = setInterval(() => {
        timeLeft--;
        setTimeOver.innerHTML = timeLeft;
        if (timeLeft === 0) {
            audioController.gameOver();
            document.getElementById('pageTwo').innerHTML += timeOutMessage;
            document.getElementById('msLosser').showModal();
            document.getElementById('playAgainBtn').addEventListener('click', () => {
                document.getElementById('msLosser').remove();
                location.reload(); // elegir otro tema
            });
        }
    }, 1000);
    if (data.length === correctCards) {
        clearTimeout(timeOver);
    }
    return timeOver;
}

// inicializar funciones
chooseGameTheme();
showGamesByLevel();

export { slicedData };


