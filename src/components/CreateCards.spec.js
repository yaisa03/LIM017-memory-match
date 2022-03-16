import {createCards, shuffle} from "./CreateCards.js";
import ghibli from '../data/ghibli/ghibli.js';
const dataGhibli = ghibli.items;
const imageGameGhibli = "images/gameGhibli.png";

describe('CreateCards', () => {
    it('it should be a function', () => {
    expect(typeof createCards).toBe('function');
    });
  });

  describe('CreateCards', () => {
    it('it should return a string', () => {
    expect(typeof createCards(dataGhibli, imageGameGhibli)).toBe('string');
    });
  });

  describe('shuffle', () => {
    it('it should be a function', () => {
    expect(typeof shuffle).toBe('function');
    });
  });
  
