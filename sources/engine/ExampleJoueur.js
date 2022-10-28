'use strict'

/**
* Example player class.
*/

class Joueur {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.other = null;
  }

  afficher(){
    console.log(this.name)
    return this.name;
  }

  setOther(name){
    this.other = name;
  }

  getOther(){
    return this.other;
  }

  getName(){
    return this.name;
  }
}

module.exports = Joueur;