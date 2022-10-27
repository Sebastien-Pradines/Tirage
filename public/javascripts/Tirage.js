/**
 * Canvas drawing example.
 * Essentially for drawing functions.
 */

 class Tirage {
    constructor() {
      this.canvas = document.querySelector('#zone');
      this.socket = io();
      this.socket.on('update', (data) => this.update(data));
      this.socket.on('maj', (data) => this.update(data));
    }
  
    afficherJoueur(player){

      if(document.getElementById(player.id) === null){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',player.id);
        newDiv.classList.add("joueur");
        var newContent = document.createTextNode(player.name);
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById("zone");
        currentDiv.appendChild(newDiv);
      }
    }

    update(data){
      const box = document.querySelectorAll(".joueur");
      box.forEach(box => {
        box.remove();
      })
      const { players } = data;
      players.forEach((player) => this.afficherJoueur(player));
    }
  }
  