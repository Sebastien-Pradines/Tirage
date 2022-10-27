'use strict'

/**
 * Import ExampleGame class.
 */

const ExampleGame = require('../engine/ExampleGame');
const Tirage = require('../engine/ExampleTirage');

const game = new ExampleGame('Example');
const tirage = new Tirage('Testing');

/**
 * Socket.io server. 
 */

const socketio = require('socket.io');
const Game = require('../engine/ExampleTirage');

function io(server) {

  const io = socketio(server);

  io.on('connection', (socket) => {

    socket.on('register', () => game.register(socket.id));

    socket.on('grow', () => game.grow(socket.id));

    socket.on('disconnect', () => { 
      tirage.delist(socket.id);
      update("del");;
    });

    socket.on('connexion', (name) => {
      tirage.connexion(socket.id, name);
      update("add");
    });

    socket.on('start', () => tirage.start());

    socket.on('result', () => {
      io.to(socket.id).emit('showResult', tirage.result(socket.id));
    });

    socket.on('changeName', (name) => tirage.changeName(socket.id, name));

  });

  function update(msg){
    const data = {
      message: msg,
      players: Object.values(tirage.players)
    };
    io.emit('update', data);
  }
/*
  setInterval(() => {
    const data = {
      message: 'Server update !',
      players: Object.values(tirage.players)
    };
    io.volatile.emit('update', data);
  }, 1000 / 25); // ~25 FPS
*/
}

module.exports = io;
