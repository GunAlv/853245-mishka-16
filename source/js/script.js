var contactsMap = document.querySelector('.contacts__map');
contactsMap.classList.remove('contacts__map--no-js');

var menu = document.querySelector('.page-header__menu');
var menuToggle = document.querySelector('.page-header__toggle');
menu.classList.remove('page-header__menu--no-js');
menuToggle.classList.remove('toggle--no-js');


menuToggle.addEventListener('click', function() {
  menu.classList.toggle('page-header__menu--opened');
  this.classList.toggle('toggle--close');
})

var reviewItems = document.querySelectorAll('.reviews__slider-item');
var prevBtn = document.querySelector('.reviews__toggle--prev');
var nextBtn = document.querySelector('.reviews__toggle--next');
var i = 0;

prevBtn.addEventListener('click', function() {
  reviewItems[i].classList.remove('reviews__slider-item--shown');
  i--;
  if (i < 0) {
    i = reviewItems.length - 1;
  }
  reviewItems[i].classList.add('reviews__slider-item--shown');
});

nextBtn.addEventListener('click', function() {
  reviewItems[i].classList.remove('reviews__slider-item--shown');
  i++;
  if (i >= reviewItems.length) {
    i = 0;
  }
  reviewItems[i].classList.add('reviews__slider-item--shown');
});
