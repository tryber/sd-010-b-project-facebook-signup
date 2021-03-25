const buttomLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
buttomLogin.addEventListener('click', () => {
  alert(loginValue.value);
});

const radioValue = document.querySelector('input[name="gender"]:checked');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');
const cadas = document.getElementById('facebook-register');

cadas.addEventListener('click', () => {
  if (radioValue.value === '' || firstname.value === '' || lastname.value === '' ||phoneEmail.value === '') {
    alert('Campos Invaálidos');
  }
  if (password.value === '' || birthdate.value === '' || cadastre.value === '') {
    alert('Campos Invaálidos');
  }
});
