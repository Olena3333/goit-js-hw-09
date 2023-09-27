
const body = document.body;
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

let id = null;

function changeBackground() {
  body.style.background = getRandomHexColor();  
}

const onStartClick = () => {
    let id = setInterval(changeBackground(), 1000); 
    if (id === null) {
        startBtn.style = "disabled"; 
    }
}

const onStopClick = () => {
    clearInterval(id);
}

startBtn.addEventListener('click', onStartClick);
startBtn.addEventListener('click', onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
