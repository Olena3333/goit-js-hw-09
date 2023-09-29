import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const dayDisplay = document.querySelector('.value[data-days]');
const hoursDisplay = document.querySelector('.value[data-hours]');
const minutesDisplay = document.querySelector('.value[data-minutes]');
const secondsDisplay = document.querySelector('.value[data-seconds]');

let userData = null;

let isActive = false;
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        cssAnimationStyle: 'from-top',
        timeout: 5000,
      });
    } else {
      if (!isActive) {
        userData = selectedDates[0];
        isActive = true;
        btnStart.disabled = false;
      }
    }
  },
};

flatpickr(input, options);

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

function addLeading(value) {
  return String(value).padStart(2, '0');
}
const onClickStart = () => {
  isActive = true;
  btnStart.disabled = true;
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const result = userData - currentTime;
    const { days, hours, minutes, seconds } = convertMs(result);
    dayDisplay.textContent = addLeading(days);
    hoursDisplay.textContent = addLeading(hours);
    minutesDisplay.textContent = addLeading(minutes);
    secondsDisplay.textContent = addLeading(seconds);

    if (result < 1000) {
      clearInterval(intervalId);
      isActive = false;
      btnStart.disabled = false;
      Notiflix.Notify.success('Time finished', {
        cssAnimationStyle: 'from-top',
        timeout: 5000,
      });
    }
  }, 1000);
};

btnStart.addEventListener('click', onClickStart);
