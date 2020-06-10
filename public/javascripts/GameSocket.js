/**
 * Socket example.
 * Essentially for client socket communications.
 */

class GameSocket {
  constructor(canvas) {
    // Reference on the drawing canvas
    this.canvas = canvas;
    // Socket communications
    this.socket = io();
    this.socket.on('update', (data) => this.canvas.redraw(data));
  }
}
