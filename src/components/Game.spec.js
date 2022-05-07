import { createCards } from "./CreateElements.js";
import { shuffle, sliceData } from "./GameLogic.js";
import ghibli from '../data/ghibli/ghibli.js';
const dataGhibli = ghibli.items;
const imageGameGhibli = "images/gameGhibli.png";

describe('CreateCards', () => {
  it('it should return a string', () => {
    expect(typeof createCards(dataGhibli, imageGameGhibli)).toBe('string');
  });
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => createCards()).toThrow(TypeError);
    expect(() => createCards(0)).toThrow(TypeError);
    expect(() => createCards(null, [])).toThrow(TypeError);
    expect(() => createCards(0, 0)).toThrow(TypeError);
  });  
});

describe('shuffle', () => {
  it('it should be a function', () => {
    expect(typeof shuffle).toBe('function');
  });
  it('it should return the data', () => {
    expect(shuffle(dataGhibli)).toEqual(
      expect.arrayContaining(dataGhibli));
  })
});

describe('sliceData', () => {
  it('it should be a function', () => {
    expect(typeof sliceData).toBe('function');
  });
  it('to have 3 elements', () => {
    expect(sliceData(0, dataGhibli)).toHaveLength(3);
  });
  it('to have 6 elements', () => {
    expect(sliceData(1, dataGhibli)).toHaveLength(6);
  });
  it('to have 9 elements', () => {
    expect(sliceData(2, dataGhibli)).toHaveLength(9);
  });
});
