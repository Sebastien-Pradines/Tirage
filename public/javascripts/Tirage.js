/**
 * Canvas drawing example.
 * Essentially for drawing functions.
 */

 class Tirage {
    constructor() {
      this.socket = io();
      this.socket.on('update', (data) => this.update(data));
      this.socket.on('maj', (data) => this.update(data));
      this.socket.on('afficheCadeau', () => this.afficherCadeau());
    }
  
    afficherJoueur(player){

      if(document.getElementById(player.id) === null){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',player.id);
        newDiv.classList.add("joueur");
        var newContent = document.createTextNode(player.name);
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById("playerList");
        currentDiv.appendChild(newDiv);
      }
    }

    afficherCadeau(){
      const cadeauDiv = document.getElementById('cadeau');
      cadeauDiv.classList.remove("hidden");
      cadeauDiv.classList.add('fadeIn');
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
  