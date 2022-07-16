const book = document.querySelector('.book');
let bookCtrl, classCollection;

const sizeClassCollection = {
  link: '.font-size',
  linkOption_0: 'font-size_small',
  bookOption_0: 'book_fs-small',
  linkOption_1: '',
  bookOption_1: '',
  linkOption_2: 'font-size_big',
  bookOption_2: 'book_fs-big',
  activeLink: 'font-size_active'
}

const colorClassCollection = {
  link: '.color',
  linkOption_0: 'text_color_black',
  bookOption_0: 'book_color-black',
  linkOption_1: 'text_color_gray',
  bookOption_1: 'book_color-gray',
  linkOption_2: 'text_color_whitesmoke',
  bookOption_2: 'book_color-whitesmoke',
  activeLink: 'color_active'
}

const bgClassCollection = {
  link: '.color',
  linkOption_0: 'bg_color_black',
  bookOption_0: 'book_bg-black',
  linkOption_1: 'bg_color_gray',
  bookOption_1: 'book_bg-gray',
  linkOption_2: 'bg_color_white',
  bookOption_2: 'book_bg-white',
  activeLink: 'color_active'
}

function eventDistributor(e) {
  //define control interface
  bookCtrl = e.target.closest('.book__control');
  
  //define similar classCollection
  if (bookCtrl.classList.contains('book__control_font-size')) {
    classCollection = sizeClassCollection;
  }
  if (bookCtrl.classList.contains('book__control_color')) {
    classCollection = colorClassCollection;
  }
  if (bookCtrl.classList.contains('book__control_background')) {
    classCollection = bgClassCollection;
  }

  //starting style controller
  new BookStyleController(bookCtrl, classCollection, e);

}

class BookStyleController {
  constructor(bookCtrl, classCollection, e) {
    this.e = e;
    this.classCollection = classCollection;
    this.links = bookCtrl.querySelectorAll(this.classCollection.link);
    this.activeCtrlLink = bookCtrl.querySelector('.' + this.classCollection.activeLink);
    this.activeCtrlLinkIndex = Array.from(this.links).indexOf(this.activeCtrlLink);

    this.changeActiveControlLink();
    this.clearBookClasslist();
    this.applyActiveOption();
  };

  clearBookClasslist() {
    if (book.classList.contains(this.classCollection.bookOption_0)) {
      book.classList.remove(this.classCollection.bookOption_0);
    };
    if (this.classCollection.bookOption_1 !== '') {
      if (book.classList.contains(this.classCollection.bookOption_1)) {
      book.classList.remove(this.classCollection.bookOption_1);
      }
    };
    if (book.classList.contains(this.classCollection.bookOption_2)) {
      book.classList.remove(this.classCollection.bookOption_2)      
    };
  };

  changeActiveControlLink() {
    this.links[this.activeCtrlLinkIndex].classList.remove(this.classCollection.activeLink);
    this.e.target.classList.add(this.classCollection.activeLink);
    this.activeCtrlLinkIndex = Array.from(this.links).indexOf(this.e.target);
    this.activeCtrlLink = this.links[this.activeCtrlLinkIndex];
  }

  applyActiveOption() {
    if (this.activeCtrlLink.classList.contains(this.classCollection.linkOption_0)) {
      this.clearBookClasslist();
      book.classList.add(this.classCollection.bookOption_0);
    }
    if (this.activeCtrlLink.classList.contains(this.classCollection.linkOption_1)) {
      this.clearBookClasslist();
      if (this.classCollection.bookOption_1 !== '') {
        book.classList.add(this.classCollection.bookOption_1);
      }
    }
    if (this.activeCtrlLink.classList.contains(this.classCollection.linkOption_2)) {
      this.clearBookClasslist();
      book.classList.add(this.classCollection.bookOption_2);
    }
  }
};

book.addEventListener('click', e => {
  e.preventDefault();
  eventDistributor(e);  
})
