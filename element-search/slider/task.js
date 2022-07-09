const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const sliderItems = document.querySelectorAll('.slider__item');
let currentSlideIndex = Array.from(sliderItems).indexOf(document.querySelector('.slider__item_active'));

//reactivating current slide to activate current dot
activateSlide(currentSlideIndex);

function deactivateSlide(index) {
  sliderItems[index].classList.remove('slider__item_active');
  dots[index].classList.remove('slider__dot_active');
}

function activateSlide(index) {  
  sliderItems[index].classList.add('slider__item_active');
  dots[index].classList.add('slider__dot_active');
}

//prev navigation
sliderArrowPrev.onclick = function () {
  deactivateSlide(currentSlideIndex);
  currentSlideIndex -= 1;
  if (currentSlideIndex < 0) currentSlideIndex = sliderItems.length - 1;
  activateSlide(currentSlideIndex);
};

//next navigation
sliderArrowNext.onclick = function () {
  deactivateSlide(currentSlideIndex);
  currentSlideIndex += 1;
  if (currentSlideIndex > sliderItems.length - 1) currentSlideIndex = 0;
  activateSlide(currentSlideIndex);
};

//dots navigation
dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', e => {
    deactivateSlide(currentSlideIndex);
    currentSlideIndex = dotIndex;
    activateSlide(currentSlideIndex);
  });
});