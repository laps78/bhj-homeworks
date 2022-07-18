const activeWidgetClass = 'chat-widget_active';
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');

function activateChat() {
  chatWidget.classList.add(activeWidgetClass);
  document.addEventListener('keydown', keyBoardEventHandler);
}

function deactivateChat() {
  chatWidget.classList.remove(activeWidgetClass);
  document.removeEventListener('keydown', keyBoardEventHandler);
}

function keyBoardEventHandler() {
  
}

document.addEventListener('click', e => {
  if (e.target.closest('.chat-widget') === chatWidget) {
    activateChat();
    
  } else {
    deactivateChat();
    
  }
});