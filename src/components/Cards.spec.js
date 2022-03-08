import { cards, FrontCard, BackCard } from './Cards.js';
import data from '../data/pokemon/pokemon.js';
//const gameImage = "images/gameWebDev.png"; 
//import pokemon from '../data/pokemon/pokemon.js';


describe('Cards', () => {
  it('should render without crashing', () => {
    const el = cards(data);
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('Cards', () => {
  it('should render with correct class', () => {
    const el = cards(data);
    expect(el.class).toBe("memorycard");
  });
});

describe('Cards', () => {
  it('should render without crashing', () => {
    const el = FrontCard();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('Cards', () => {
  it('should render with correct class', () => {
    const el = FrontCard();
    expect(el.class).toBe("front-card");
  });
});

describe('Cards', () => {
  it('should render without crashing', () => {
    const el = BackCard();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('Cards', () => {
  it('should render with correct class', () => {
    const el = BackCard();
    expect(el.class).toBe("back-card");
  });
});
