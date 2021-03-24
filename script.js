const loginBtn = document.querySelector('#button-login');
const inputsRegister = document.querySelectorAll('.input-register');
const user = document.querySelector('#user-email-phone');
const inputsGender = document.querySelectorAll('.input-gender');
const otherGender = document.querySelector('#personalizado');
const registerBtn = document.querySelector('#facebook-register');

function validatesInputs() {
  let validInputs = true;
  for (let i = 0; i < inputsRegister.length; i += 1) {
    if (!inputsRegister[i].value) {
      validInputs = false;
    }
  }
  return validInputs;
}

function validatesGender() {
  let validGender = false;
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      validGender = true;
    }
  }
  return validGender;
}

function selectGender() {
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      return inputsGender[i].value;
    }
  }
}

function validatesRegister() {
  let valid = true;
  const error = document.querySelector('#invalid-input');
  error.innerHTML = '';

  const formRegister = document.querySelector('#form-register');

  if (!validatesGender() || !validatesInputs()) {
    error.innerHTML = '<hr>Campos inválidos!';
    valid = false;
  }

  formRegister.appendChild(error);
  return valid;
}

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const res = user.value;
  return alert(res);
});

otherGender.addEventListener('click', () => {
  const newInput = document.createElement('input');
  newInput.setAttribute('name', 'gender-custom');
  newInput.setAttribute('placeholder', 'Gênero (opcional)');
  newInput.className = 'input-register';

  const genders = document.querySelector('.genders');

  genders.insertAdjacentElement('afterend', newInput);
});

registerBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (validatesRegister()) {
    const rightContent = document.querySelector('.right-content');

    rightContent.innerHTML = `
    Olá, ${inputsRegister[0].value} ${inputsRegister[1].value}
    ${inputsRegister[2].value}
    ${inputsRegister[4].value}
    ${selectGender()}
    `;
  }
});
