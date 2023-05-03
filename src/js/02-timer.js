// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const daysClockEl = document.querySelector('[data-days]'),
  hoursClockEl = document.querySelector('[data-hours]'),
  minutesClockEl = document.querySelector('[data-minutes]'),
  secondsClockEl = document.querySelector('[data-seconds]'),
  btnClockStart = document.querySelector('[data-start]');

btnClockStart.disabled = true;

function msDateResult(lastDate) {
  const startDateClock = new Date();
  return lastDate.getTime() - startDateClock.getTime();
}
function setClock(lastDate) {
  timerSetClock = setInterval(() => {
    let dateObg = convertMs(msDateResult(lastDate));
    daysClockEl.textContent =
      dateObg.days.toString().length == 1 ? '0' + dateObg.days : dateObg.days;
      //це малий код тому вирішив просто додавати нулі чи краще реалізувати зміну елементів обєкту 
      //Створити функцію яка буде додавати нуль і передавати в неї dateObg.hours і тд
    hoursClockEl.textContent =
      dateObg.hours.toString().length == 1
        ? '0' + dateObg.hours
        : dateObg.hours;
    minutesClockEl.textContent =
      dateObg.minutes.toString().length == 1
        ? '0' + dateObg.minutes
        : dateObg.minutes;
    secondsClockEl.textContent =
      dateObg.seconds.toString().length == 1
        ? '0' + dateObg.seconds
        : dateObg.seconds;
  }, 1000);
}
let lastDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    lastDate = selectedDates[0];
    const todayDate = new Date();

    if (todayDate.getTime() > lastDate.getTime()) {
      alert('Please choose a date in the future');
    } else {
      btnClockStart.disabled = false;
    }
  },
};
btnClockStart.addEventListener('click', e => {
  setClock(lastDate);
});
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
const inputPicker = document.querySelector('#datetime-picker');
flatpickr(inputPicker, options);
