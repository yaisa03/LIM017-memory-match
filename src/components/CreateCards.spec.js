import { createCards, shuffle, sliceData } from "./CreateCards.js";
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

describe('shuffle', () => {
  it('it should return the data', () => {
    expect(shuffle(dataGhibli)).toEqual(
      expect.arrayContaining(dataGhibli));
  })
});

describe('sliceData', () => {
  it('it should be a function', () => {
    expect(typeof sliceData).toBe('function');
  });
});

describe('sliceData', () => {
  it('to have 3 elements', () => {
    expect(sliceData(0, dataGhibli)).toHaveLength(3);
  });
});

describe('sliceData', () => {
  it('to have 6 elements', () => {
    expect(sliceData(1, dataGhibli)).toHaveLength(6);
  });
});

describe('sliceData', () => {
  it('to have 9 elements', () => {
    expect(sliceData(2, dataGhibli)).toHaveLength(9);
  });
});
