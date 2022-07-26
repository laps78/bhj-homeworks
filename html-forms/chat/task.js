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
  'Мы ничего не будем вам продавать!',
  'Я тупой бот, друг, не обессудь! Сам в шоке... Эти кодеры чем думают, я не знаю?!'
]

let timestamp, hours, minutes;

function activateChat() {
  chatWidget.classList.add(activeWidgetClass);
  new Chatbox(chatWidget);
}

function deactivateChat() {
  chatWidget.classList.remove(activeWidgetClass);
  document.addEventListener('click', clickEventHandler);
}

class Chatbox {
  constructor(chatWidget) {
    this.messages = chatWidget.querySelector('.chat-widget__messages');
    this.input = chatWidget.querySelector('#chat-widget__input');
    this.input.value = '';
    this.messages = chatWidget.querySelector('chat-widget__messages');
    this.timeout = setInterval(this.chatBotMessage.bind(this), 30000);
    
    this.input.focus();
    this.inputEventHandler();
  }

  inputEventHandler() {
    this.input.addEventListener('keyup', e => {
      if (this.input.focus && this.input.value !== ''){
        if (e.key === 'Enter') {
          this.userMessage(this.input.value);
          this.input.value = '';
        }
      } 
    })
  }

  get timeStamp() {
    timestamp = new Date();
    hours = timestamp.getHours();
    if (hours < 10) hours = '0' + hours;
    minutes = timestamp.getMinutes()
    if (minutes < 10) minutes = '0' + minutes;
    return `${hours}:${minutes} `;
  }

  autoScroll() {
    if (this.timeout) {
      clearInterval(this.timeout);
    };
    this.timeout = setInterval(this.chatBotMessage.bind(this), 30000);
    messages.lastChild.scrollIntoView();
  }

  chatBotMessage() {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${this.timeStamp}</div>
      <div class="message__text">${botMessages[Math.floor(Math.random() * (botMessages.length - 1))]}</div>
    </div>`;
    this.autoScroll(); 
  }

  userMessage(message) {
    messages.innerHTML += `
      <div div class="message message_client">
        <div class="message__time">${this.timeStamp}</div>
        <div class="message__text">${message}</div>
      </div>`;
    this.autoScroll();
    this.chatBotMessage();
  }
}

function clickEventHandler(e) {
  if (e.target.closest('.chat-widget') === chatWidget) {
    activateChat();
  } else {
    deactivateChat();
  }
}

document.addEventListener('click', clickEventHandler);