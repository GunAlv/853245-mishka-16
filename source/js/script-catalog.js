var goodButtons = document.querySelectorAll('.goods__button');
var modal = document.querySelector('.modal--catalog');
var overlay = document.querySelector('.overlay');

for (var i = 0; i < goodButtons.length; i++) {
  goodButtons[i].onclick = function(evt) {
    evt.preventDefault();
    overlay.style.display = 'block';
    modal.classList.add('modal--shown');
  }
}

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
