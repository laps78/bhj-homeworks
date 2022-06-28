let timer = document.getElementById('timer');
let current;
function countDown(timer) {
  current = timer.textContent;
  current -= 1;
  timer.textContent = current;
  if (current === 0) {
    alert('Вы победили в конкурсе');
    clearInterval(intervalId);
  }
};
let intervalId = window.setInterval(countDown, 1000, timer);