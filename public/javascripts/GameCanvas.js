/**
 * Canvas drawing example.
 * Essentially for drawing functions.
 */

class GameCanvas {
  constructor() {
    this.canvas = document.querySelector('#game-canvas');
    this.context = this.canvas.getContext('2d');
  }

  drawPlayer(player) {
    const { x, y, r, color } = player;
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI, false);
    this.context.fillStyle = color;
    this.context.fill();
  }

  redraw(data) {
    // Clear everything
    this.context.clearRect(0, 0, 600, 600);
    // Draw all players
    const { players } = data;
    players.forEach((player) => this.drawPlayer(player));
  }
}
