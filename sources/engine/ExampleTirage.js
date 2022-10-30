'use strict'

/**
 * Import ExamplePlayer class.
 */

const ExampleJoueur = require('./ExampleJoueur');

/**
* Example game class.
*/

class Tirage {
  constructor(name) {
    this.name = name;
    this.players = {};
    this.playersIdList = [];
    this.valid = true;
  }

  connexion(id, name) {
    this.players[id] = new ExampleJoueur(id, name);
    this.playersIdList.push(id)
  }

  afficher(id) {
    this.players[id].afficher();
  }

  delist(id) {
    delete this.players[id];
    for(var i = 0; i < this.playersIdList.length; i++){
      if(this.playersIdList[i] === id){
        this.playersIdList.splice(i,1);
      }
    }
  }

  start(){
    this.valid = true;
    var idListDonne = Array.from(this.playersIdList);
    var idListRecu = Array.from(idListDonne);
    idListDonne = this.random(idListDonne);
    while(idListDonne.length > 0){
      for(var i = 0; i < idListDonne.length; i++){
        if(idListRecu[i] == idListDonne[i]){
          this.valid = false;
        }
        this.players[idListRecu[i]].setOther(this.players[idListDonne[i]].getName());
        idListDonne.splice(i,1);
        idListRecu.splice(i,1);
      }
    }
    console.log(this.players);
    console.log(this.valid);

  }

  random(idList){
    let currentIndex = idList.length,  randomIndex;
    while (currentIndex != 0) {
     randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [idList[currentIndex], idList[randomIndex]] = [
      idList[randomIndex], idList[currentIndex]];
    }
  return idList;
  }

  result(id){
    return this.players[id].getOther();
  }

}

module.exports = Tirage;