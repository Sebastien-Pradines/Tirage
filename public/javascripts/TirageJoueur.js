/**
 * Socket example.
 * Essentially for client socket communications.
 */


 class TirageJoueur {
    constructor() {
      this.socket = io();
      //this.socket.emit('connexion');
      

      this.nameB = document.querySelector('#nameButton');
      this.startB = document.querySelector('#start');
      this.resultatB = document.querySelector('#result');

      this.nameB.onclick = (event) => this.changeName(event);
      this.startB.onclick = (event) => this.start(event);
      this.resultatB.onclick = (event) => this.resultat(event);

      this.socket.on('showResult', (data) => this.showResult(data));
    }

    changeName(){
      var name = document.getElementById('name').value;
      this.socket.emit('connexion', name);
      document.getElementById('nameDiv').classList.add("hidden");
      document.getElementById('zone').classList.remove("hidden");
    }
  
    start(player) {
      this.socket.emit('start');
    }

    resultat(player){
      this.socket.emit('result');
    }

    showResult(data){
      alert(data);
    }
  }
  