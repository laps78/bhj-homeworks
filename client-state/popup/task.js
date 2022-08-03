const modal = document.querySelector('#subscribe-modal');
console.log('cookie:');
console.log(document.cookie);

if (document.cookie !== 'modalClosed=true') {
  modal.classList.add('modal_active');
}

const modalCloseBtn = document.querySelector('.modal__close');

modalCloseBtn.addEventListener('click', e => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClosed=true';
}); 