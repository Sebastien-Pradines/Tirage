'use strict'

/**
 * Import ExampleGame class.
 */

const Tirage = require('../engine/ExampleTirage');

const tirage = new Tirage('Testing');

/**
 * Socket.io server. 
 */

const socketio = require('socket.io');

function io(server) {

  const io = socketio(server);

  io.on('connection', (socket) => {


    socket.on('disconnect', () => { 
      tirage.delist(socket.id);
      update("del");;
    });

    socket.on('connexion', (name) => {
      tirage.connexion(socket.id, name);
      update("add");
    });

    socket.on('start', () => {
      tirage.start();
      io.emit('afficheCadeau');
    });

    socket.on('result', () => {
      io.to(socket.id).emit('showResult', tirage.result(socket.id));
    });

    socket.on('changeName', (name) => tirage.changeName(socket.id, name));

    socket.on('idValid', () => {
      console.log(tirage.isValid());
      callback(tirage.isValid());
    });

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
