let intervalId = null;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function startColorChange() {
    if (intervalId) {
        return;
    }


intervalId = setInterval(function (){
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
   }, 1000)

    startBtn.disabled = true; // Деактивувати кнопку "Start"
}

    function stopColorChange() {
      clearInterval(intervalId);
      intervalId = null;
      startBtn.disabled = false; // Активувати кнопку "Start"
    }

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    startBtn.addEventListener('click', startColorChange);
    stopBtn.addEventListener('click', stopColorChange);