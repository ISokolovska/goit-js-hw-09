const buttonStart = document.querySelector(['button[data-start]']);
const buttonStop = document.querySelector(['button[data-stop]']);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    let randomBodyColor = getRandomHexColor();
    document.body.style.backgroundColor = randomBodyColor;
  }, 1000);
  buttonStart.setAttribute('disabled', '');
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.removeAttribute('disabled');
});
