const buttonEntrar = document.getElementById('button-login');

// const form = document.getElementById('forms');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);

// Validações
function invalid() {
  const errorMessage = document.querySelector('.error-message');
  errorMessage.innerText = 'Campos inválidos';
}

const getForms = document.getElementById('forms');

function validate(event) {
  event.preventDefault();
  const arrayInfoUser = document.querySelectorAll('.info-user');

  for (let index = 0; index < arrayInfoUser.length; index += 1) {
    if (arrayInfoUser[index].value === '') {
      invalid();
    }
  }
}
getForms.addEventListener('submit', validate);

const radioPerso = document.getElementById('radio-buttons-pers');
const radioMasc = document.getElementById('radio-buttons-masc');
const radioFemin = document.getElementById('radio-buttons-fem');

function inputPersonalizado() {
  const genderCustom = document.getElementById('gender-custom');
  genderCustom.style.display = 'block';
}

function inputNormal() {
  const genderCustom = document.getElementById('gender-custom');
  genderCustom.style.display = 'none';
}

radioFemin.addEventListener('click', inputNormal);
radioMasc.addEventListener('click', inputNormal);
radioPerso.addEventListener('click', inputPersonalizado);
