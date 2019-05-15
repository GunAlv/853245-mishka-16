var formInputs = document.querySelectorAll('.form__input');
var formTextarea = document.querySelector('.form__textarea');
var formSubmit = document.querySelector('.form__button');

formSubmit.addEventListener('click', function(evt) {
  for (var j = 0; j < formInputs.length; j++) {
    if (!formInputs[j].value || !formTextarea.value) {
      evt.preventDefault();
      formInputs[j].classList.add('form__input--error');
      formTextarea.classList.add('form__input--error');
    }
    else {
      formInputs[j].classList.remove('form__input--error');
      formTextarea.classList.remove('form__input--error');
    }
  }
})
