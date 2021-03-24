const btnLogin = document.getElementById('button-login');
const inputEmailTel = document.querySelector('#user-email-phone');
const inputPassword = document.querySelector('#user-password');

function alertLogin() {
  if ((inputEmailTel.value !== '') && (inputPassword.value !== '')) {
    alert(inputEmailTel.value);
  }
}

btnLogin.addEventListener('click', alertLogin);

const newGenderElem = document.getElementById('form-container');
const newGenderInput = document.createElement('input');
const genderRadio = document.getElementById('generico');

genderRadio.addEventListener('click', () => {
  newGenderElem.appendChild(newGenderInput);
  newGenderInput.setAttribute('type', 'text');
  newGenderInput.setAttribute('name', 'gender-custom');
  newGenderInput.setAttribute('placeholder', 'Gênero (opcional)');
});
