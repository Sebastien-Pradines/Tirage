/**
 * Socket example.
 * Essentially for client socket communications.
 */


 class TirageJoueur {
    constructor() {
      this.socket = io();

      if(document.querySelector('#start'))
      {
        this.startB = document.querySelector('#start');
        this.startB.onclick = (event) => this.start(event);
      }
      this.nameB = document.querySelector('#nameButton');
      this.resultatB = document.querySelector('#button');

      this.nameB.onclick = (event) => this.changeName(event);
      this.resultatB.onclick = (event) => this.resultat(event);

      this.socket.on('showResult', (data) => this.showResult(data));
    }

    changeName(){
      var name = document.getElementById('name').value;
      this.socket.emit('connexion', name);
      document.getElementById('nameDiv').classList.add("hidden");
      document.getElementById('zone').classList.remove("hidden");
    }
  
    start() {
      this.socket.emit('start');
    }

    resultat(){
      this.socket.emit('result');
    }

    showResult(data){
      document.getElementById("resultat").innerText = data;
    }
  }
  