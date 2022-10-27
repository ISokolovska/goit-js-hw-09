import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const timerEl = document.querySelector('.timer');
const buttonStart = document.querySelector(['button[data-start]']);
let daysSpan = timerEl.querySelector(['span[data-days]']);
let hoursSpan = timerEl.querySelector(['span[data-hours]']);
let minutesSpan = timerEl.querySelector(['span[data-minutes]']);
let secondsSpan = timerEl.querySelector(['span[data-seconds]']);
let field = timerEl.querySelectorAll('.field');
let timerStart;
let timerId = null;
timerEl.style.display = 'flex';
timerEl.style.textAlign = 'center';
timerEl.style.gap = '20px';
timerEl.style.fontSize = '40px';

field.forEach((element, index, array) => {
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
});

console.log(field);

buttonStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.removeAttribute('disabled');
      timerStart = selectedDates[0] - new Date();
      buttonStart.addEventListener('click', () => {
        startTimer(timerStart);
      });
    }
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

function startTimer(timerStart) {
  timerId = setInterval(function () {
    let timer = convertMs(timerStart);
    daysSpan.textContent = addLeadingZero(timer.days);
    hoursSpan.textContent = addLeadingZero(timer.hours);
    minutesSpan.textContent = addLeadingZero(timer.minutes);
    secondsSpan.textContent = addLeadingZero(timer.seconds);
    timerStart = timerStart - 1000;
    if (timerStart < 0) {
      clearInterval(timerId);
      buttonStart.setAttribute('disabled', '');
      buttonStart.removeEventListener('click', startTimer);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(number) {
  const newNumber = number.toString().padStart(2, '0');
  return newNumber;
}
