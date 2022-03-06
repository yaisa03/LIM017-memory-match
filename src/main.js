import webdev from './data/webdev/webdev.js';
import pokemon from './data/pokemon/pokemon.js';
import ghibli from './data/ghibli/ghibli.js';
import showCards from './components/Cards.js'; //funcion que muestra las cartas
// console.log(Cards)

/*data importada*/
const dataWebDev = webdev.items;
const dataPokemon = pokemon.items;
const dataGhibli = ghibli.items;

//vista de  juegos por tematica*/
const pageOne = document.getElementById("pageOne");
//titulo del juego
const title2 = document.getElementById("title2");
//vista de la pagina 2
const pageTwoGame = document.getElementById("pageTwo");
//contendores de las cartas
const containerGamePokemon = document.getElementById("containerGamePokemon");
const containerGameWebDev = document.getElementById("containerGameWebDev");
const containerGameGhibli = document.getElementById("containerGameGhibli");
//Timer y numero de flips de las cartas
const gameInfo = document.querySelector(".gameInfoContainer");

//evento que lleva a los juegos
const chooseGame = document.querySelectorAll("div[id^=choose]")
for (let i = 0; i < chooseGame.length; i++) {
    chooseGame[i].addEventListener('click', () => { //evento que inicia
        pageTwoGame.style.display = "";
        gameInfo.style.display = "";
        pageOne.style.display = "none";
        for (let j = 0; j < array.length; j++) {
            if (i == j) {
                return array[j]();
            }
        }
    });
}
//funciones que crean las vistas de los juegos
const array = [
    //Funcion para juego web development
    function gameWebDev() {
        //imagen de la carta de atras para el juego
        const imageGameWebDev = "images/gameWebDev.png";
        containerGameWebDev.style.display = "";
        title2.innerText = "WebDev Memory Match";
        showCards(dataWebDev, imageGameWebDev, containerGameWebDev);
    },
    //Funcion para juego Pokemon
    function gamePokemon() {
        //imagen de la carta de atras para el juego
        const imageGamePokemon = "images/gamePokemon.png";
        containerGamePokemon.style.display = "";
        title2.innerText = "Pokemon Memory Match";
        showCards(dataPokemon, imageGamePokemon, containerGamePokemon);
        //el resultado de showCards va a la funcion que la chocolatea y ese resultado va a containerGame
    },
    //Funcion para el juego Ghibli
    function gameGhibli() {
        //imagen de la carta de atras para el juego
        const imageGameGhibli = "images/gameGhibli.png";
        containerGameGhibli.style.display = "";
        title2.innerText = "Ghibli Memory Match";
        showCards(dataGhibli, imageGameGhibli, containerGameGhibli);
    }
];

//Juego de tematica POKEMON
//imagen de la carta de atras para el juego
//const imageGamePokemon = "images/gamePokemon.png";
//para seleccionar el juego
/*const choosePokemon = document.querySelector("#choosePokemon"); //contenedor
choosePokemon.addEventListener('click', () => { //evento que inicia
    pageTwoGame.style.display = "";
    gameInfo.style.display = "";
    pageOne.style.display = "none";
    gamePokemon()
    //funcion que chocolatea cartas, el resultado va a gamePokemon
});

//const imageGameWebDev = "images/gameWebDev.png";
//para seleccionar el juego
const chooseWebDev = document.querySelector("#chooseWebDev"); //contenedor
chooseWebDev.addEventListener('click', () => { //evento que inicia
    pageTwoGame.style.display = "";
    gameInfo.style.display = "";
    pageOne.style.display = "none";
    gameWebDev()
    //funcion que chocolatea cartas, el resultado va a gamePokemon
});*/
