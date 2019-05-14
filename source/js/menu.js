var menu = document.querySelector('.page-header__menu');
var menuToggle = document.querySelector('.page-header__toggle');
menu.classList.remove('page-header__menu--no-js');
menuToggle.classList.remove('toggle--no-js');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('page-header__menu--opened');
  this.classList.toggle('toggle--close');
});
