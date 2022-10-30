// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //const jsConfetti = new JSConfetti();
  let canvas = document.getElementById('#expose');
  const jsConfetti = new JSConfetti({ canvas });

  let playButton = document.querySelector('button');//getElementsByTagName('button');
  let volumeSlider = document.getElementById('volume-controls');
  let selection = document.getElementById('horn-select');

  //let audioDisplay = document.querySelector('audio');

  //When you select a horn from the drop down menu
  selection.addEventListener('change', (event) => {
    // code to run when the event is triggered
    let imageDisplay = document.getElementsByTagName('img')[0];
    let audioDisplay = document.querySelector('audio');
    let hornName = event.target.value;
    //The correct image should display
    //The correct audio sound file should be set
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

  //When you change the volume on the slider
  volumeSlider.addEventListener('input', (event) => {
    let volumeNum = event.target.value;
    let volumeIcon = document.getElementsByTagName('img')[1];

    //The correct volume icon should be set
    if(volumeNum == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }else if(volumeNum<33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }else if(volumeNum<67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }else if(volumeNum<100){
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

    //The corresponding volume should be set for the audio element 
    audioDisplay.volume = volumeNum/100;

  });

  //When you click the “Play Sound” button 
  playButton.addEventListener('click', (event) => {
    //The corresponding sound for the horn selected should play out loud at the specified volume
    let audioDisplay = document.querySelector('audio');
    audioDisplay.load();
    audioDisplay.play();

    //If the Party Horn is selected, confetti should shoot out out
    if(selection.value == "party-horn"){
      jsConfetti.addConfetti();
    }

  });

}