const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

let id = null;
stopBtn.disabled = true;

function changeBackground() {
  body.style.background = getRandomHexColor();
}

function disabledBtn(a, b) {
  startBtn.disabled = a;
  stopBtn.disabled = b;
}

function onStartClick() {
  id = setInterval(() => {
    changeBackground();
    disabledBtn(true, false);
  }, 1000);
}

function onStopClick() {
  clearInterval(id);
  disabledBtn(false, true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
