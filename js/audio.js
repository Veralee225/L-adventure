/* Audio Script */
const audio = document.querySelector('audio')

/*Function to set the volume*/
function setHalfVolume() {
    let audio = document.querySelector("audio");
    audio.volume = 0.2;
}

//Alert welcoming website visitor
alert("Welcome! Enjoy your experince");


window.addEventListener("DOMcontentLoaded", event => {
    let audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
});

/*const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
}); */
