const dropdownItem = document.querySelector('.dropdown');
let dropdownValue = document.querySelector('.dropdown__value');
  
dropdownItem.addEventListener('click', e => {
  dropdownItem.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
  e.preventDefault();
  dropdownValue.textContent = e.target.textContent;
  });