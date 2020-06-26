const slideList = [{
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

const image = document.querySelector('img.slider');
const textH1 = document.querySelector('header h1');
const dots = [...document.querySelectorAll('div.dots span')];

// Interface
const time = 3000;
let active = 0;

// Implementations
const changeDot = () => {
   const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
   dots[activeDot].classList.remove('active');
   dots[active].classList.add('active');
};

const changeSlide = () => {
   active++;
   if (active === slideList.length) {
      active = 0;
   };
   image.src = slideList[active].img;
   textH1.textContent = slideList[active].txt;
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
      textH1.textContent = slideList[active].txt;
      changeDot();
      indexInterval = setInterval(changeSlide, time);
   }
}

let indexInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide);