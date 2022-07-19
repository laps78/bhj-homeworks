const activeWidgetClass = 'chat-widget_active';
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');

function activateChat() {
  chatWidget.classList.add(activeWidgetClass);
  new Chatbox(chatWidget);
}

function deactivateChat() {
  chatWidget.classList.remove(activeWidgetClass);
}

class Chatbox {
  constructor(chatWidget) {
    this.input = chatWidget.querySelector('#chat-widget__input');
    this.messages = chatWidget.querySelector('chat-widget__messages');
    this.timeout = setInterval(this.chatBotMessage, 30000);

    this.inputEventHandler();
  }

  inputEventHandler() {
    this.input.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this.userMessage(this.input.value);
       }
    })
  }

  chatBotMessage() {
    console.log('bot says hi for 30 seconds left');
  }

  userMessage(message) {
    console.log('user says');
    console.log(message);
    //TODO check input.value!
    clearInterval(this.timeout);
  }
}

document.addEventListener('click', e => {
  if (e.target.closest('.chat-widget') === chatWidget) {
    activateChat();
  } else {
    deactivateChat();
  }
});