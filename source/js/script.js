var goodButton = document.querySelector('.good-week__button');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

goodButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.style.display = 'block';
  modal.classList.add('modal--shown');
});

overlay.addEventListener('touchstart', function() {
  closeModal();
});

overlay.addEventListener('click', function() {
  closeModal();
});

function closeModal() {
  overlay.style.display = 'none';
  modal.classList.remove('modal--shown');
}

var contactsMap = document.querySelector('.contacts__map');
contactsMap.classList.remove('contacts__map--no-js');

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
