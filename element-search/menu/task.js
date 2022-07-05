const menuLinks = document.querySelectorAll('a.menu__link');
const subMenus = document.querySelectorAll('ul.menu_sub');

menuLinks.forEach(item => {
  item.addEventListener('click', e => {
    subMenus.forEach(subMenu => {
      if (subMenu.classList.contains('menu_active')) {
        subMenu.classList.remove('menu_active');
      };
    });

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