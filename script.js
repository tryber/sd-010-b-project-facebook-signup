const buttonLogin = document.querySelector('#button-login');
const catchValueInput = document.querySelector('#user-email-phone');
const registerInputs = document.querySelectorAll('.input-register');
const registerButton = document.querySelector('#facebook-register');
const pegaRadio = document.querySelector('#custom');
const divRight = document.querySelector('.right-content');
const gender = document.querySelectorAll('.input-gender');
const pegaContainer = document.querySelector('#gender-container');
const pegaFem = document.querySelector('#female');
const pegaMasc = document.querySelector('#male');

buttonLogin.addEventListener('click', () => {
  if (catchValueInput.value !== '') {
    alert(catchValueInput.value);
  } else {
    alert('Campo Vazio');
  }
});

// validates all input fields
function validatesInputs() {
  let isValid = true;

  for (let i = 0; i < registerInputs.length; i += 1) {
    if (!registerInputs[i].value) {
      isValid = false;
    }
  }

  return isValid;
}

// validates the whole form
function validatesForm() {
  let isFormValid = true;
  const errorField = document.querySelector('#error-message');

  if (!validatesInputs()) {
    errorField.innerText = 'Campos inválidos';
    isFormValid = false;
  }

  return isFormValid;
}

function getGender() {
  let seletedGender;
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      seletedGender = gender[i].value;
    }
  }

  return seletedGender;
}

// replaces right div with the user information
function showUserInfo() {
  const name = document.querySelector('#input-name');
  const surname = document.querySelector('#input-lastname');
  const emailPhone = document.querySelector('#input-phone-email');
  const birthDate = document.querySelector('#input-date');
  const userInfo = `Olá, ${name.value} ${surname.value}
  E-mail/Phone: ${emailPhone.value}
  Birth Date: ${birthDate.value}
  Gênero: ${getGender()}`;
  divRight.innerText = '';
  const paragraph = document.createElement('p');
  paragraph.innerText = userInfo;
  console.log(paragraph);
  divRight.appendChild(paragraph);
}

registerButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (validatesForm()) {
    showUserInfo();
  }
});

pegaRadio.addEventListener('click', () => {
  const criaInput = document.createElement('input');
  criaInput.name = 'gender-custom';
  criaInput.id = 'gender-input';
  criaInput.placeholder = 'Gênero (opcional)';
  pegaContainer.appendChild(criaInput);
});

pegaMasc.addEventListener('click', () => {
  const catInput = document.querySelector('#gender-input');
  pegaContainer.removeChild(catInput);
});

pegaFem.addEventListener('click', () => {
  const catInput = document.querySelector('#gender-input');
  pegaContainer.removeChild(catInput);
});
