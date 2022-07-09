const menuLinks = document.querySelectorAll('.menu__link');
const subMenus = document.querySelectorAll('.menu_sub');

menuLinks.forEach(item => {
  item.addEventListener('click', e => {
    let thisSubMenu = e.target.parentElement.querySelector('.menu_sub');
    console.log('Click!');
    if (thisSubMenu.classList.contains('menu_active')) {
      thisSubMenu.classList.remove('menu_active');
    } else {
      subMenus.forEach(subMenu => {
        if (subMenu.classList.contains('menu_active')) {
          
          subMenu.classList.remove('menu_active');
        };
      });
      if (item.parentElement.querySelector('.menu_sub')) {
        e.preventDefault();
      };
      item.parentElement.querySelector('ul').classList.toggle('menu_active');
    };
  });
});
