'use strict'

/**
 * Import ExampleGame class.
 */

const ExampleGame = require('../engine/ExampleGame');

const game = new ExampleGame('Example');

/**
 * Socket.io server. 
 */

const socketio = require('socket.io');

function io(server) {

  const io = socketio(server);

  io.on('connection', (socket) => {

    socket.on('register', () => game.register(socket.id));

    socket.on('grow', () => game.grow(socket.id));

    socket.on('disconnect', () => game.delist(socket.id));

  });

  setInterval(() => {
    const data = {
      message: 'Server update !',
      players: Object.values(game.players)
    };
    io.volatile.emit('update', data);
  }, 1000 / 25); // ~25 FPS

}

module.exports = io;
