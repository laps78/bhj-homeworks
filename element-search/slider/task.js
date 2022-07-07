const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let currentSlideIndex = sliderItems.indexOf(document.querySelector('.slider__item_active'));

function deactivateSlides() {
  sliderItems.forEach(item => {
    if (item.classList.contains('slider__item_active')) {
      item.classList.remove('slider__item_active');
    };
  });  
}
//prev navigation
sliderArrowPrev.onclick = function () {
  currentSlideIndex -= 1;
  if (currentSlideIndex < 0) currentSlideIndex = sliderItems.length - 1;
  deactivateSlides();
  sliderItems[currentSlideIndex].classList.add('slider__item_active');
};
//next navigation
sliderArrowNext.onclick = function () {
  currentSlideIndex += 1;
  if (currentSlideIndex > sliderItems.length - 1) currentSlideIndex = 0;
  deactivateSlides();
  sliderItems[currentSlideIndex].classList.add('slider__item_active');
};
//dots navigation
dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', e => {
    deactivateSlides();
    sliderItems[dotIndex].classList.add('slider__item_active');
    currentSlideIndex = dotIndex;
  });
});