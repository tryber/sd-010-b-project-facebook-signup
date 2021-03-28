const btnEntrar = document.getElementById('button-login');
const campEmail = document.getElementById('user-email-phone');

function entrar() {
  alert(campEmail.value);
}

btnEntrar.addEventListener('click', entrar);

const registerBtn = document.querySelector('#facebook-register');
const campos = document.querySelectorAll('.input');

function validate(event) {
  const invalid = document.querySelector('#invalid');
  for (let index = 0; index < campos.length; index += 1) {
    if (campos[index].value === '') {
      event.preventDefault();
      invalid.innerText = 'Campos inválidos';
    }
  }
}

registerBtn.addEventListener('click', validate);

const custom = document.querySelector('#custom');
const male = document.querySelector('#male');
const female = document.querySelector('#female');

function customField(event) {
  const inputGender = document.querySelector('#input-gender');
  const fieldGender = document.createElement('input');
  let checked = false;
  if (event.target.id === 'custom' && !checked) {
    checked = true;
    fieldGender.name = 'gender-custom';
    fieldGender.placeholder = 'Gênero (opcional)';
    fieldGender.type = 'text';
    inputGender.appendChild(fieldGender);
  } else if (event.target.id !== 'custom') {
    checked = false;
    inputGender.removeChild(fieldGender);
  }
}
custom.addEventListener('click', customField);
male.addEventListener('click', customField);
female.addEventListener('click', customField);
