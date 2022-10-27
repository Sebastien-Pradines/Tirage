'use strict'

/**
* Example player class.
*/
function randomName(){
  let r = (Math.random() + 1).toString(36).substring(7);
  return r;
}


class Joueur {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.other = null;
    this.color = '#'+((1<<24)*Math.random()|0).toString(16); // random hex color
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