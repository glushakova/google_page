var svg = document.querySelector('.search__svg');
var addItem = document.querySelector('.search__add-item');
var input = document.querySelector('.search__input-item');
var ENTER_CODE = 13;

input.addEventListener('input', function (event) {
  if (event.target.value.length >= 1) {
    svg.classList.remove('hidden');
    addItem.classList.add('search__input-item--true');
  } else {
    svg.classList.add('hidden');
    addItem.classList.remove('search__input-item--true');
  }
});

svg.addEventListener('click', function () {
  input.value = '';
  svg.classList.add('hidden');
  addItem.classList.remove('search__input-item--true');
});

var popup = document.querySelector('.footer__form');
var icon = document.querySelector('.icon');

document.addEventListener('click', function (event) {
  if (event.target.text === 'Настройки' && popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
  } else {
    popup.classList.add('hidden');
  }

  if (
    event.target.classList[0] === 'menu__icon' &&
    icon.classList.contains('hidden')
  ) {
    icon.classList.remove('hidden');
  } else {
    icon.classList.add('hidden');
  }
});

function search() {
  if (input.value) {
    document.location.href = `https://www.google.com/search?&q=${input.value}`;
    input.value = '';
  }
}

document
  .getElementsByClassName('search__btn')[0]
  .addEventListener('click', search);

input.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_CODE) {
    search();
  }
});
