import { createCards, endMessage } from "./CreateElements.js";
import { shuffle, sliceData, flipCard, checkMatch, unflipCards, disableCards, resetBoard } from "./GameLogic.js";

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

describe('endMessage', () => {
  it('it should return the data', () => {
    expect(typeof endMessage(10, 22)).toEqual('string');
  })
});

describe('shuffle', () => {
  it('it should return the data', () => {
    expect(shuffle(dataGhibli)).toEqual(
      expect.arrayContaining(dataGhibli));
  })
});

describe('sliceData', () => {
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

describe('flipCard', () => {
  it('it should return', () => {
    expect(flipCard()).toBeUndefined();
  });
  it('it should be', () => {
    expect(flipCard()).toBe(undefined);
  });
});

describe('checkMatch', () => {
  it('it should return', () => {
    const [firstCard, secondCard] = [{id:1}, {id:2}];
    expect(checkMatch(firstCard, secondCard)).toBe(unflipCards());
  });
  it('it should return', () => {
    const [firstCard, secondCard] = [{id:1}, {id:1}];
    expect(checkMatch(firstCard, secondCard)).toBe(disableCards());
  });
});

describe('unflipCards', () => {
  it('it should be', () => {
    expect(unflipCards()).toBe(undefined);
  });
});

describe('resetBoard', () => {
  it('it should be', () => {
    expect(resetBoard()).toBe(undefined);
  });
});
