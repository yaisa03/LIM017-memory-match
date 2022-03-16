import webdev from '../data/webdev/webdev.js';
import pokemon from '../data/pokemon/pokemon.js';
import ghibli from '../data/ghibli/ghibli.js';

export const gameThemes = [
    {  // juego Ghibli
        image: 'images/gameGhibli.png', // imagen del back-card
        data: ghibli.items,
    },
    { // juego Pokemon
        image: 'images/gamePokemon.png', // imagen del back-card
        data: pokemon.items,
    },
    { // juego web development
        image: "images/gameWebDev.png", // imagen del back-card
        data: webdev.items,
    }
]
