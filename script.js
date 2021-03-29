const buttonLogin = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');
const registerInputs = document.querySelectorAll('.input-register');
const registerButton = document.querySelector('#facebook-register');
// const pegaRadio = document.querySelector('#custom');
const divRight = document.querySelector('.right-content');
const gender = document.querySelectorAll('.input-gender');
const dateInput = document.querySelector('#input-date');

buttonLogin.addEventListener('click', () => {
  if (emailPhoneInput.value !== '') {
    alert(emailPhoneInput.value);
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

// function that places slashes on the date
function slash() {
  dateInput.addEventListener('keypress', () => {
    if (dateInput.value.length === 2 || dateInput.value.length === 5) {
      dateInput.value += '/';
    }
  });
}

slash();

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

// gets the selected gender on inputs
// we get this logic from https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
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
  const userInfo = `Olá, ${name.value} ${surname.value}
  E-mail/Phone: ${emailPhone.value}
  Birth Date: ${dateInput.value}
  Gênero: ${getGender()}`;
  divRight.innerText = '';
  const paragraph = document.createElement('p');
  paragraph.innerText = userInfo;
  divRight.appendChild(paragraph);
}

// register button "Cadastre-se"
registerButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (validatesForm()) {
    showUserInfo();
  }
});

// this function creates the custom gender input
function createGender() {
  const pegaContainer = document.querySelector('#gender-container');
  const criaInput = document.createElement('input');
  criaInput.id = 'custom-gender';
  criaInput.name = 'gender-custom';
  criaInput.placeholder = 'Gênero (opcional)';
  pegaContainer.appendChild(criaInput);
}

// removes the custom gender input if other gender were selected
function addRemoveCustomSex() {
  const customGender = document.querySelector('#custom-gender');

  if (getGender() === 'Personalizado') {
    createGender();
  } else if (customGender) {
    customGender.remove();
  }
}

for (let i = 0; i < gender.length; i += 1) {
  gender[i].addEventListener('click', addRemoveCustomSex);
}
