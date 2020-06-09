'use strict'

/**
* Example player class.
*/

class ExamplePlayer {
  constructor(id) {
    this.id = id;
    this.x = Math.random() * 600;
    this.y = Math.random() * 600;
    this.r = 5;
    this.color = '#'+((1<<24)*Math.random()|0).toString(16); // random hex color
  }

  grow() {
    this.r += 5;
  }
}

module.exports = ExamplePlayer;