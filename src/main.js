const phone = document.querySelector('#tel');
const name = document.querySelector('#name');
const phoneError = document.querySelector('.error-phone');
const nameError = document.querySelector('.error-name');
const button = document.querySelector('.form__button');
let correctPhone = false;
let correctName = false;

phone.addEventListener('change', function(event) {
  event.preventDefault();

  const pattern = /^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/gmi;

  if (!pattern.test(event.target.value)) {
    phoneError.style.display = 'block';
    correctPhone = false;
  } else {
    correctPhone = true;
  }
});

phone.addEventListener('input', function(event) {
  event.preventDefault();
  phoneError.style.display = 'none';
});

name.addEventListener('change', function(event) {
  event.preventDefault();

  if (event.target.value.trim() === '' || /[0-9]/.test(event.target.value)) {
    nameError.style.display = 'block';
    correctName = false;
  } else {
    correctName = true;
  }
});

name.addEventListener('input', function(event) {
  event.preventDefault();
  nameError.style.display = 'none';
});

button.addEventListener('click', function(event) {
  event.preventDefault();

  if (correctName && correctPhone) {
    phone.value = '';
    name.value = '';
  }
});
