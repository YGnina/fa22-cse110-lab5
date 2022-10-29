// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //const jsConfetti = new JSConfetti();
  let canvas = document.getElementById("#expose");
  const jsConfetti = new JSConfetti({ canvas });

  let playButton = document.getElementsByTagName('button')[0];
  let volumeSlider = document.getElementById('volume-controls');
  let selection = document.getElementById('horn-select');


  selection.addEventListener('change', (event) => {
    // code to run when the event is triggered
    let imageDisplay = document.getElementsByTagName("img")[0];
    let audioDisplay = document.querySelector(".hidden");
    let hornName = event.target.value;
    if(hornName == "air-horn"){
      imageDisplay.src = "assets/images/air-horn.svg";
      audioDisplay.src = "assets/audio/air-horn.mp3";
    }else if(hornName == "car-horn"){
      imageDisplay.src = "assets/images/car-horn.svg";
      audioDisplay.src = "assets/audio/car-horn.mp3";
    }else if(hornName == "party-horn"){
      imageDisplay.src = "assets/images/party-horn.svg";
      audioDisplay.src = "assets/audio/party-horn.mp3";
    }
  
  });

  volumeSlider.addEventListener('input', (event) => {//change', (event) => {
    let volumeNum = event.target.value;
    let volumeIcon = document.getElementsByTagName('img')[1];

    if(volumeNum == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }else if(1<=volumeNum && volumeNum<33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }else if(33<=volumeNum && volumeNum<67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }else if(volumeNum>=67 && volumeNum<100){
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

  });

  playButton.addEventListener('click', (event) => {
    let audio = document.querySelector(".hidden");

    audio.load();
    audio.play();

    //if(volumeSlider.value == "part-horn"){
    if(audio.getAttribute("src") === "assets/audio/party-horn.mp3") {
      jsConfetti.addConfetti();
      jsConfetti.clearCanvas();
    }

  });

}