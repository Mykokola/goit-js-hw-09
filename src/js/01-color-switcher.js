function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnStarsSetColor = document.querySelector('[data-start]'),
  btnStopSetColor = document.querySelector('[data-stop]');
let timeId;
btnStarsSetColor.addEventListener('click', e => {
  timeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStarsSetColor.disabled = true;
  btnStopSetColor.disabled = false;
});
btnStopSetColor.addEventListener('click', e => {
  clearInterval(timeId);
  btnStarsSetColor.disabled = false;
  btnStopSetColor.disabled = true;
});
