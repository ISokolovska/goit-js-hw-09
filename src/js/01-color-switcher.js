const buttonStart = document.querySelector(['button[data-start]']);
const buttonStop = document.querySelector(['button[data-stop]']);
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  let randomBodyColor = getRandomHexColor();
  document.body.style.backgroundColor = randomBodyColor;
}

buttonStart.addEventListener('click', () => {
  changeColor();
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
  buttonStart.setAttribute('disabled', '');
  buttonStop.removeAttribute('disabled');
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', '');
});
