/**
 * DOM and events example.
 * Essentially for client DOM and events.
 */

class ControlsEvents {
  constructor(socket) {
    // Reference on the socket
    this.socket = socket;
    // DOM elements
    this.button = document.querySelector('#button-grow');
    // DOM events
    this.button.onclick = (event) => this.onClickGrow(event);
  }

  onClickGrow(event) {
    this.socket.grow();
  }
}
