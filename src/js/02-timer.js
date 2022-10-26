import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const buttonStart = document.querySelector(['button[data-start]']);
// const timer = document.querySelector('.timer');
let timerId = null;

buttonStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      buttonStart.removeAttribute('disabled');
    }
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', { options });

buttonStart.addEventListener('click', startTimer);

function startTimer(id, endtime) {
  let timer = document.querySelector('.timer');
  let daysSpan = timer.querySelector(['span[data-days]']);
  var hoursSpan = timer.querySelector(['span[data-hours]']);
  var minutesSpan = timer.querySelector(['span[data-minutes]']);
  var secondsSpan = timer.querySelector(['span[data-seconds]']);
  convertMs();
}

// function startTimer() {
//   timerId = setInterval(function () {
//     let timer = convertMs(selectedDates[0] - new Date()).fp_incr(1);
//   }, 1000);
// }

function clearIntervalTimer() {
  let diff = convertMs(selectedDates[0] - new Date()).fp_incr(1);
  if (diff <= 0) {
    clearInterval(timerId);
    buttonStart.setAttribute('disabled');
  }
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
  const newNumber = number.padStart(2, '0');
  return (document.querySelector('.label').textContent = newNumber);
}
addLeadingZero();
