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
  }

  connexion(id, name) {
    this.players[id] = new ExampleJoueur(id, name);
    const test = Object.values(this.players);
    this.playersIdList.push(id);
    // console.log(test[0].id);
    // console.log(Object.values(this.players[test[0].id]));
    
    // console.log(test[0]);

    // var arr1 = Object.values(this.players);
    // arr1.sort(function() { return 0.5 - Math.random();});

    // Object.values(this.players).forEach(player => player.name = arr1.name);
    // this.players[id].affectOther("e");
    //console.log(Object.values(this.players));
    console.log(this.players);
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
    // -- Version 1 --
    // var idListDonne = Array.from(this.playersIdList);
    // var idListRecu = Array.from(idListDonne);
    // while(idListDonne.length > 0){
    //   idListDonne = this.random(idListDonne);
    //   for(var i = 0; i < idListDonne.length; i++){
    //     if((idListRecu[i] != idListDonne[i]) && (this.players[idListDonne[i]].other != idListRecu[i])){
    //       this.players[idListRecu[i]].setOther(idListDonne[i]);
    //       console.log(idListDonne[i], "est affecté à ", idListRecu[i]);
    //       idListDonne.splice(i,1);
    //       idListRecu.splice(i,1);
    //     }
    //   }
    // }
    
    var idListDonne = Array.from(this.playersIdList);
    var idListRecu = Array.from(idListDonne);
    while(idListDonne.length > 0){
      idListDonne = this.random(idListDonne);
      for(var i = 0; i < idListDonne.length; i++){
        this.players[idListRecu[i]].setOther(this.players[idListDonne[i]].getName());
        console.log(idListDonne[i], "est affecté à ", idListRecu[i]);
        idListDonne.splice(i,1);
        idListRecu.splice(i,1);
      }
    }
    console.log(this.players);

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