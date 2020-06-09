'use strict'

/**
 * Import ExamplePlayer class.
 */

const ExamplePlayer = require('./ExamplePlayer');

/**
* Example game class.
*/

class ExampleGame {
  constructor(name) {
    this.name = name;
    this.players = {};
  }

  register(id) {
    this.players[id] = new ExamplePlayer(id);
  }

  grow(id) {
    this.players[id].grow();
  }

  delist(id) {
    delete this.players[id];
  }
}

module.exports = ExampleGame;