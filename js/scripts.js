/* slider and tab */
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const sliderBtn = slider.querySelectorAll('.slider__button');

const tab = document.querySelector('.services');
const tabSlides = tab.querySelectorAll('.services__item');
const tabBtn = tab.querySelectorAll('.services__button');

/* slider and tab */
/* функции */
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
const feedbackForm = modalFeedback.querySelector('.feedback__form')
const modalMap = document.querySelector('.modal__map');

const inputReq = modalFeedback.querySelectorAll('input[required], textarea[required]');
const modalSubmit = modalFeedback.querySelector('.modal__commun__submit');

const btnClose = document.querySelectorAll('.btn__close');

/* функции */
const modalWork = function (modal, btn, shake) {
  btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    
    if (!modal.classList.contains('modal__show')) {
      modal.classList.add('modal__show', 'appear');
      
      if(shake) {
        feedbackForm.classList.remove('shake');
      }
    } 
  });
}

modalWork(modalFeedback, btnFeedback, 1);
modalWork(modalMap, btnMap);

/* валидация формы */
const remInvalid = function(array, className) {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
}

modalSubmit.addEventListener('click', function(evt) {
  feedbackForm.classList.remove('shake');
  feedbackForm.offsetWidth = feedbackForm.offsetWidth;

  for (let i = 0; i < inputReq.length; i++) {

    if (!inputReq[i].checkValidity()) {
      inputReq[i].classList.add('invalid');
      feedbackForm.classList.add('shake');
    }

    inputReq[i].oninput = function() {
      inputReq[i].classList.remove('invalid');
    }
  }
});

/* закрытие модальных окон */
for (let i = 0; i < btnClose.length; i++) {

  btnClose[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    modalFeedback.classList.remove('modal__show', 'appear');
    modalMap.classList.remove('modal__show', 'appear');

    remInvalid(inputReq, 'invalid');
  });
}

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    modalFeedback.classList.remove('modal__show','appear');
    modalMap.classList.remove('modal__show', 'appear');

    remInvalid(inputReq, 'invalid');
  }
});

