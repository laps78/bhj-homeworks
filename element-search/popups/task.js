const modalMain = document.querySelector('#modal_main');
const modalSucces = document.querySelector('#modal_success');

modalMain.classList.toggle('modal_active');

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal__close')) {
    e.target.closest('div.modal').classList.toggle('modal_active');
  };
  if (e.target.classList.contains('show-success')) {
    modalSucces.classList.toggle('modal_active');
  };
});