const slideList = [
   {
      img: 'images/img1.jpg',
      txt: 'Text 1',
   },
   {
      img: 'images/img2.jpg',
      txt: 'Text 2',
   },
   {
      img: 'images/img3.jpg',
      txt: 'Text 3',
   }];

const image = document.querySelector('.slider__img');
const text = document.querySelector('.slider__txt');
const dots = [...document.querySelectorAll('.slider__dots span')];

// Interface
const time = 3000;
let active = 0;

// Implementations
const changeDot = () => {
   const activeDot = dots.findIndex(dot => dot.classList.contains('slider--active-dot'));
   dots[activeDot].classList.remove('slider--active-dot');
   dots[active].classList.add('slider--active-dot');
};

const changeSlide = () => {
   active++;
   if (active === slideList.length) {
      active = 0;
   };
   image.src = slideList[active].img;
   text.textContent = slideList[active].txt;
   changeDot();
};

// Keys
const keyChangeSlide = (e) => {
   if (e.keyCode === 37 || e.keyCode === 39) {
      clearInterval(indexInterval);
      e.keyCode === 37 ? active-- : active++;
      if (active === slideList.length) {
         active = 0;
      } else if (active < 0) {
         active = slideList.length - 1;
      }
      image.src = slideList[active].img;
      text.textContent = slideList[active].txt;
      changeDot();
      indexInterval = setInterval(changeSlide, time);
   }
};

let indexInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide);
