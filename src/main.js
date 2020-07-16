const phone = document.querySelector('#tel');
const name = document.querySelector('#name');
const phone_error = document.querySelector('.error-phone')
const name_error = document.querySelector('.error-name')
const button = document.querySelector('.form__button')
let correct_phone = false;
let correct_name = false;

phone.addEventListener('change', function(event) {
    event.preventDefault();
    const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gmi
    if(!pattern.test(event.target.value)) {
        phone_error.style.display = 'block';
        correct_phone = false;
    } else {
        correct_phone = true;
    }
})

phone.addEventListener('input', function(event) {
    event.preventDefault();
    phone_error.style.display = 'none';
})

name.addEventListener('change', function(event) {
    console.log(111)
    event.preventDefault();
    if(event.target.value.trim() === ''|| /[0-9]/.test(event.target.value)) {
        name_error.style.display = 'block';
        correct_name = false;
    } else {
        correct_name = true;
    }
})

name.addEventListener('input', function(event) {
    event.preventDefault();
    name_error.style.display = 'none';
})

button.addEventListener('click', function(event) {
    event.preventDefault();
    if(correct_name && correct_phone) {
        phone.value = '';
        name.value = '';
    }
})