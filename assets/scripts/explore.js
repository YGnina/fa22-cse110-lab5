// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let talkButton = document.getElementsByTagName('button')[0];
  let selection = document.getElementById('voice-select');
  let inputTxt = document.getElementById('text-to-speak');
  let imageDisplay = document.getElementsByTagName('img')[0];

  const synth = window.speechSynthesis;
  let voices = [];

  //source:https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selection.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click',(event)=>{
    let utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    let selectedOption =  selection.selectedOptions[0].getAttribute('data-name');
    //imageDisplay.src="assets/images/smiling-open.png";
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    utterThis.addEventListener('start',() => imageDisplay.src = "assets/images/smiling-open.png");
    utterThis.addEventListener('end',() => imageDisplay.src = "assets/images/smiling.png");
    
    
  })
}