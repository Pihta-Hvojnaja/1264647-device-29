/* slider */
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const sliderBtn = slider.querySelectorAll('.slider__button');

const tab = document.querySelector('.services');
const tabSlides = tab.querySelectorAll('.services__item');
const tabBtn = tab.querySelectorAll('.services__button');

/* slider and tab */
const workSlider = function (arrayItem, arrayBtn, classNameItem, classNameBtn) {
  for (let i = 0; i < arrayBtn.length; i++) {

    arrayBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      
      for (let j = 0; j < arrayBtn.length; j++) {
        arrayItem[j].classList.remove(classNameItem);
        arrayBtn[j].classList.remove(classNameBtn);
      }
  
      if (!arrayItem[i].classList.contains(classNameItem)) {
        arrayItem[i].classList.add(classNameItem);
        arrayBtn[i].classList.add(classNameBtn);
      }
    });
  }   
}

workSlider(slides, sliderBtn,'slider__item__show', 'button__selected');
workSlider(tabSlides, tabBtn,'tab__show', 'button__checked');


/* MODAL WINDOWS */
const main = document.querySelector('.page__main');

const btnFeedback = main.querySelector('.feedback__link'); 
const btnMap = main.querySelector('.contacts__link'); 

const modalFeedback = document.querySelector('.modal__commun');
const modalMap = document.querySelector('.modal__map');
const btnClose = document.querySelectorAll('.btn__close');

const modalWork = function (modal, btn) {
  btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    
    if (!modal.classList.contains('modal__show')) {
      modal.classList.add('modal__show');
    } 
  });
}

modalWork(modalFeedback, btnFeedback);
modalWork(modalMap, btnMap);

for (let i = 0; i < btnClose.length; i++) {

  btnClose[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    modalFeedback.classList.remove('modal__show');
    modalMap.classList.remove('modal__show');
  });
}
  