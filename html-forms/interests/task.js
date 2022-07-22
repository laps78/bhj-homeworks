const checkboxes = document.querySelectorAll('.interest__check');

Array.from(checkboxes).forEach(checkbox => {
  checkbox.onchange = function (event) {
    function modifyChilds(target) {
      if (target.parentElement.nextElementSibling) {
        let targetChilds = target.parentElement.nextElementSibling.querySelectorAll('.interest__check');
        if (target.checked) {
          targetChilds.forEach(child => child.checked = true);
        } else {
          targetChilds.forEach(child => child.checked = false);
        }
      }
    }
    
    function modifyParent(target) {
      if (target.closest('.interests_main') && target.closest('.interests_active')) {
        let targetParent = target.closest('.interests_active').previousElementSibling.querySelector('.interest__check');
        let targetSibling = Array.from(target.closest('.interests_active').querySelectorAll('.interest__check'));
        
        if (targetSibling.some(item => item.checked === true)) {
          targetParent.checked = true;
        } else {
          targetParent.checked = false;
        }
      }
    }
    
    modifyParent(event.target);
    modifyChilds(event.target);

    
  };
});