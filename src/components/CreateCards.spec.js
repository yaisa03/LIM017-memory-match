import createCards from "./CreateCards";
import pokemon from "./data/pokemon/pokemon.js"

const containerGamePokemon = document.getElementById("containerGamePokemon");
const imageGamePokemon = "images/gamePokemon.png";

describe('Create', () => {
    it('should render without crashing', () => {
      const cards = createCards(pokemon.items, imageGamePokemon, containerGamePokemon);
      expect(cards.length).toBe(pokemon.length);
    });
  });
  