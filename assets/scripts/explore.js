// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var text = document.querySelector("textarea");
  var button = document.querySelector("button");
  var select = document.querySelector("select");
  var pic = document.querySelector("img");
  var list = speechSynthesis.getVoices();
  function voiceChange(){
    list = speechSynthesis.getVoices();
    for(var i=0; i<list.length; i++)
    {
      var option = document.createElement("option");
      option.textContent = list[i].name + "(" + list[i].lang +")";
      select.appendChild(option);
    }
  }
  function speakup()
  {
    if(select.selectedIndex == 0){
      return;
    }
    var utter = new SpeechSynthesisUtterance(text.value);
    utter.voice = list[select.selectedIndex-1];
    speechSynthesis.speak(utter);
  }
  setInterval(() => {
    if(!speechSynthesis.speaking){
      pic.src = "assets/images/smiling.png";
    }
    else{
      pic.src = "assets/images/smiling-open.png";
    }
  }, 10);
  // update voice list
  speechSynthesis.addEventListener("voiceschanged", voiceChange);
  // get text and language
  button.addEventListener("click", speakup);
}