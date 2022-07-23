const hasTooltipLinks = document.querySelectorAll('.has-tooltip');

function closeOpenedToolTips() {
  let openedToolTips = document.querySelectorAll('.tooltip_active');
  openedToolTips.forEach(toolTip => toolTip.classList.remove('tooltip_active'));
}

hasTooltipLinks.forEach(toolTipLink => {
  toolTipLink.addEventListener('click', e => {
    e.preventDefault();
    closeOpenedToolTips();
    let toolTipHTML = `<div class="tooltip" style="left: 0; top: 0">${toolTipLink.title}</div>`;
    toolTipLink.insertAdjacentHTML('afterend', toolTipHTML);
    toolTipLink.nextElementSibling.classList.add('tooltip_active');
  });
});