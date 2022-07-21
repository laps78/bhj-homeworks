'ues strict';

const activeWidgetClass = 'chat-widget_active';
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const botMessages = [
  'Где ваша совесть?',
  'Кто тут?',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше!',
  'Добрый день! До свидания!',
  'Вы не купили ни одного товара доя того, чтобы так с нами разговаривать!',
  'Мы ничего не будем вам продавать!'
]

let hours, minutes;

function activateChat() {
  chatWidget.classList.add(activeWidgetClass);
  new Chatbox(chatWidget);
}

function deactivateChat() {
  chatWidget.classList.remove(activeWidgetClass);
}

class Chatbox {
  constructor(chatWidget) {
    this.messages = chatWidget.querySelector('.chat-widget__messages');
    this.input = chatWidget.querySelector('#chat-widget__input');
    this.input.value = '';
    this.messages = chatWidget.querySelector('chat-widget__messages');

    this.timeout = setInterval(this.chatBotMessage, 5000);

    this.input.focus();
    this.inputEventHandler();
  }

  inputEventHandler() {
    this.input.addEventListener('keyup', e => {
      if (this.input.value !== ''){
        if (e.key === 'Enter') {
          this.userMessage(this.input.value);
          this.input.value = '';
        }
      } else {
        console.log('Пустая строка!');
      }
    })
  }

  get timeStamp() {
    hours = new Date().getHours();
    if (hours < 10) hours = '0' + hours;
    minutes = new Date().getMinutes()
    if (minutes < 10) minutes = '0' + minutes;

    return `${hours}:${minutes} `;
  }

  autoScroll() {
    messages.lastChild.scrollIntoView();
  }

  chatBotMessage() {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${this.timeStamp}</div>
      <div class="message__text">${botMessages[Math.floor(Math.random() * (botMessages.length - 1))]}</div>
    </div>`;
    this.autoScroll();
    clearInterval(this.timeout);
  }

  userMessage(message) {
    console.log(`user says`);
    messages.innerHTML += `
      <div div class="message message_client">
        <div class="message__time">${this.timeStamp}</div>
        <div class="message__text">${message}</div>
      </div>`;
    this.autoScroll();
    clearInterval(this.timeout);
    this.chatBotMessage();
  }
}

document.addEventListener('click', e => {
  if (e.target.closest('.chat-widget') === chatWidget) {
    activateChat();
  } else {
    deactivateChat();
  }
});