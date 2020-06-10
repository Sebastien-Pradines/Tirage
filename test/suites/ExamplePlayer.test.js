'use strict'

const ExamplePlayer = require('../../sources/engine/ExamplePlayer');

describe('ExamplePlayer test suite', () => {

  test('Player should grow 5px by 5px', () => {
    const player = new ExamplePlayer();
    expect(player.r).toBe(5);
    player.grow();
    expect(player.r).toBe(10);
  });

});
