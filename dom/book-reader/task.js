const book = document.querySelector('.book');
const bookCtrl = document.querySelector('.book__control');
const bookCtrlLinks = bookCtrl.querySelectorAll('.font-size');
let activeCtrlLink = bookCtrl.querySelector('.font-size_active');
let activeCtrlLinkIndex = Array.from(bookCtrlLinks).indexOf(activeCtrlLink);

function clearBookClasslist() {
  if (book.classList.contains('book_fs-big')) {
    book.classList.remove('book_fs-big');
  }
  if (book.classList.contains('book_fs-small')) {
    book.classList.remove('book_fs-small');
  }
}

bookCtrl.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  //changing active size control link
  bookCtrlLinks[activeCtrlLinkIndex].classList.remove('font-size_active');
  e.target.classList.add('font-size_active');
  activeCtrlLinkIndex = Array.from(bookCtrlLinks).indexOf(e.target);
  activeCtrlLink = bookCtrlLinks[activeCtrlLinkIndex];
  
  //changing text size
  if (activeCtrlLink.dataset.size === 'small') {
    clearBookClasslist();
    book.classList.add('book_fs-small');
  }
  if (activeCtrlLink.dataset.size === undefined) {
    clearBookClasslist();
  }
  if (activeCtrlLink.dataset.size === 'big') {
    clearBookClasslist();
    book.classList.add('book_fs-big');
  }
})