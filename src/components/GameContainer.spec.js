import { containerWebDev, containerPokemon, containerGhibli } from './GameContainer';
//import pokemon from '../data/pokemon/pokemon.js';
describe('Cards', () => {
  it('should render without crashing', () => {
    const el = containerWebDev();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('Cards', () => {
  it('should render with correct class', () => {
    const el = containerWebDev();
    expect(el.id).toBe("containerGameWebDev");
  });
});


describe('Cards', () => {
  it('should render without crashing', () => {
    const el = containerPokemon();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('Cards', () => {
  it('should render with correct id', () => {
    const el = containerPokemon();
    expect(el.id).toBe("containerGamePokemon");
  });
});

describe('Cards', () => {
  it('should render without crashing', () => {
    const el = containerGhibli();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('Cards', () => {
  it('should render with correct id', () => {
    const el = containerGhibli();
    expect(el.id).toBe("containerGameGhibli");
  });
});
