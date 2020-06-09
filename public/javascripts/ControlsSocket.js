/**
 * Socket example.
 * Essentially for client socket communications.
 */

class ControlsSocket {
  constructor() {
    this.socket = io();
    this.socket.emit('register');
  }

  grow() {
    this.socket.emit('grow');
  }
}
