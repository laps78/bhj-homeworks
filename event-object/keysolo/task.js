class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.time = container.querySelector('.status__time');
    this.clickCount = 0;
    
    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  //timer
  timer() {
    this.clickCount = 1;
    if (!this.timeout) {
      this.timeout = setInterval(() => {
        this.time.textContent -= 1;
        if (this.time.textContent === "0") {
          this.fail();
        };
      }, 1000);
    }
  }

  setTimer = this.timer.bind(this);

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    document.addEventListener('keyup', (e) => {
      document.removeEventListener('keydown', this.setTimer);
      this.clickCount += 1;
      if (e.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
        this.success();
      } else {
        this.fail();
        };
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.time.textContent = this.wordElement.textContent.length;
    
    clearInterval(this.timeout);
    this.timeout = null;
    this.clickCount = 0;
    if (this.clickCount === 0) {
      document.addEventListener('keydown', this.setTimer);
    }
    
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
};

new Game(document.getElementById('game'))

