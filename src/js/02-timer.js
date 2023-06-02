import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let countdownInterval;

function startTimer() {
  const targetDate = new Date(input.value);
  const currentTime = new Date();

  if (targetDate <= currentTime) {
    alert("Please choose a date in the future");
    return;
  }

  clearInterval(countdownInterval);
  countdownInterval = setInterval(updateTimer, 1000);

  updateTimer();
  startButton.disabled = true;
}

function updateTimer() {
  const targetDate = new Date(input.value);
  const currentTime = new Date();
  const timeDifference = targetDate - currentTime;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    startButton.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});

startButton.addEventListener('click', startTimer);