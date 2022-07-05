const menuLinks = document.querySelectorAll('a.menu__link');

menuLinks.forEach(item => {
  item.addEventListener('click', e => {
    if (item.parentElement.querySelector('ul')) {
      e.preventDefault();
    };
    item.parentElement.querySelector('ul').classList.toggle('menu_active');    
  });
});

/*
if (menuLink.hasChildNodes()) menuLink.hasChildNodes() {
  
}
*/