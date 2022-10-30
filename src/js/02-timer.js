import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const datetimePicker = document.querySelector('#datetime-picker');
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
buttonStart.setAttribute('disabled', '');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    const selectedDate = selectedDates[0];
    if (currentDate.getTime() > selectedDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.removeAttribute('disabled');
    }
    console.log(selectedDate);
  },
};
flatpickr('#datetime-picker', options);

function timeOutPut(timerStart) {
  let { days, hours, minutes, seconds } = convertMs(timerStart);
  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}

function startTimer(timerStart) {
  buttonStart.setAttribute('disabled', '');
  datetimePicker.setAttribute('disabled', '');
  buttonStart.removeEventListener('click', startTimer);
  timerId = setInterval(function () {
    timerStart = new Date(datetimePicker.value) - new Date();
    if (timerStart >= 0) {
      timeOutPut(timerStart);
      return;
    }
    clearInterval(timerId);
  }, 1000);
}
buttonStart.addEventListener('click', startTimer);

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

function addLeadingZero(value) {
  return (newNumber = String(value).padStart(2, '0'));
}
