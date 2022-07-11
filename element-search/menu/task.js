const menuLinks = document.querySelectorAll('.menu__link');
const subMenus = document.querySelectorAll('.menu_sub');

menuLinks.forEach(item => {
  item.addEventListener('click', e => {
    if (item.parentElement.querySelector('.menu_sub')) {
      e.preventDefault();
      //closing active submenu by click
      let thisSubMenu = e.target.parentElement.querySelector('.menu_sub');
      if (thisSubMenu.classList.contains('menu_active')) {
        thisSubMenu.classList.remove('menu_active');
      } else {
        //closing all submenus if opened
        subMenus.forEach(subMenu => {
        if (subMenu.classList.contains('menu_active')) {
          subMenu.classList.remove('menu_active');
          };
        });

        item.parentElement.querySelector('ul').classList.toggle('menu_active');
      };
    };
  });
});
