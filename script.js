const btnLogin = document.getElementById('button-login');
const inputEmailTel = document.querySelector('#user-email-phone');
const inputPassword = document.querySelector('#user-password');

function alertLogin() {
  if ((inputEmailTel.value !== '') && (inputPassword.value !== '')) {
    alert(inputEmailTel.value);
  }
}

btnLogin.addEventListener('click', alertLogin);

const formValues = document.querySelectorAll('.form');

const birthDate = document.getElementById('birthdate');





