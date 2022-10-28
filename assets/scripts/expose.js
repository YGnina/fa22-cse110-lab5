// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  let imageDisplay = document.getElementsByTagName("img")[0];
  let audioDisplay = document.querySelector("audio");
  let playButton = document.getElementsByTagName('button');
  let volumeSlider = document.getElementsById('volume-controls');
  let selection = document.getElementById('horn-select');


  


  selection.addEventListener('change', (event) => {
    // code to run when the event is triggered
    let hornName = event.target.value;
    if(hornName == "air-horn"){
      imageDisplay.src = "assets/images/air-horn.svg";
      audioDisplay.arc = "assets/audio/air-horn.mp3";
    }else if(hornName == "car-horn"){
      imageDisplay.src = "assets/images/car-horn.svg";
      audioDisplay.arc = "assets/audio/car-horn.mp3";
    }else if(hornName == "party-horn"){
      imageDisplay.src = "assets/images/party-horn.svg";
      audioDisplay.arc = "assets/audio/party-horn.mp3";
    }
  
  });

  volumeSlider.addEventListener('change', (event) => {
    let volume = event.target.value;
    let volumeIcon = document.getElementsByTagName('img')[1];
    if(volume == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }else if(1<=volume<33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }else if(33<=volume<67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }else if(volume>=67){
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

  });

  playButton.addEventListener('click', (event) => {
    let audio = document.getElementsByTagName('audio');
    audio.load();
    audio.play();

    if(audio.getAttribute("src") === "assets/audio/party-horn.mp3") {
      jsConfetti.addConfetti();
      jsConfetti.clearCanvas()
    }

  });


}