'use strict'

const ExampleGame = require('../../sources/engine/ExampleGame');

describe('ExampleGame test suite', () => {

  test('Game should be initialized with no player', () => {
    const game = new ExampleGame('Game');
    expect(game.name).toBe('Game');
    expect(Object.values(game.players).length).toBe(0);
  });

  test('Game should register and delist players', () => {
    const game = new ExampleGame('Game');
    game.register('Riri');
    game.register('Fifi');
    game.register('Loulou');
    expect(Object.values(game.players).length).toBe(3);
    game.delist('Riri');
    game.delist('Loulou');
    expect(Object.values(game.players).length).toBe(1);
  });

});
