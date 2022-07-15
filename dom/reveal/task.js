const reveals = document.querySelectorAll('.reveal');

function switchVisible(elem) {
  const viewportHeight = window.innerHeight;
  const top = elem.getBoundingClientRect().top;
  const bottom = elem.getBoundingClientRect().bottom;

  if (top > 0 && bottom < viewportHeight) {
    elem.classList.add('reveal_active');
  } else {
    elem.classList.remove('reveal_active');
  }

}

document.onscroll = () => {
  reveals.forEach(elem => switchVisible(elem));
}