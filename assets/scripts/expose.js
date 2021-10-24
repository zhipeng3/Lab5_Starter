// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var button = document.querySelector("button");
  var image = document.querySelector("img");
  var selection = document.querySelector("#horn-select");
  var sound = new Audio();
  var volume = document.querySelector("#volume");
  const jsConfetti = new JSConfetti();

  button.addEventListener("click", change);
  volume.addEventListener("change", change_vol);

  function change_vol(){
    var sound_icon = document.querySelector("#volume-controls img");
    sound.volume=volume.value/100;
    if(volume.value<33){
      sound_icon.src="assets/icons/volume-level-1.svg";
    }
    else if(volume.value>66){
      sound_icon.src="assets/icons/volume-level-3.svg";
    }
    else{
      sound_icon.src="assets/icons/volume-level-2.svg";
    }
  }

  function change(){
    if(selection.selectedIndex == 1){
      image.src="assets/images/air-horn.svg";
      sound.src="assets/audio/air-horn.mp3";
      sound.play();
    }
    else if(selection.selectedIndex == 2){
      image.src="assets/images/car-horn.svg";
      sound.src="assets/audio/car-horn.mp3";
      sound.play();
    }
    else if(selection.selectedIndex == 3){
      image.src="assets/images/party-horn.svg";
      sound.src="assets/audio/party-horn.mp3";
      sound.play();
      if(volume.value != 0){
        jsConfetti.addConfetti();
      }
    }
    
    
  }
}