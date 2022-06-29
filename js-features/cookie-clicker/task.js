const counter = document.getElementById('clicker__counter');
const cookie = document.querySelector('#cookie');
let currentValue = Number(counter.textContent);

cookie.onclick = function () {
  this.width = 250;
  currentValue += 1;
  counter.textContent = currentValue;
  setTimeout(() => this.width = 200, 10);
}