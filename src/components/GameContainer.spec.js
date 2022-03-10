import { containerWebDev, containerPokemon, containerGhibli } from './GameContainer';
//import pokemon from '../data/pokemon/pokemon.js';
//const root = document.getElementById("pageTwo");

describe('containerWebDev es elemento html', () => {
  it('es elemento html', () => {
    const el = containerWebDev();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('containerGameWebDev', () => {
  it('should render with correct class', () => {
    const el = containerWebDev();
    expect(el.id).toBe("containerGameWebDev");
  });
});


describe('containerPokemon', () => {
  it('es elemento html', () => {
    const el = containerPokemon();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('containerPokemon', () => {
  it('should render with correct id', () => {
    const el = containerPokemon();
    expect(el.id).toBe("containerGamePokemon");
  });
});

describe('containerGhibli', () => {
  it('es elemento html', () => {
    const el = containerGhibli();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('containerGhibli', () => {
  it('should render with correct id', () => {
    const el = containerGhibli();
    expect(el.id).toBe("containerGameGhibli");
  });
});
