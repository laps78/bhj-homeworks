const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');
const sliderItems = document.querySelectorAll('.slider__item');
let currentSlide = document.querySelector('.slider__item_active')
//
console.log('current slide:'); 
console.log(currentSlide);

console.log('dots:');
console.log(dots);
//


sliderArrowPrev.onclick = function () {
  //console.log();
};

sliderArrowNext.onclick = function () {

};

dots.forEach(dot => {
  dot.addEventListener('click', e => {
    sliderItems[Array.from(dots).indexOf(dot)].classList.toggle('slider__item_active');
  });
});