const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');
const genderPersonality = document.getElementById('input-gender-personality');
const divRightContent = document.getElementsByClassName('right-content')[0];
const formOpenAccount = document.querySelector('[name="form"]');

/* Requisito 20: */

const getInfoSignUp = (info) => {
  // console.log('localizei informações do cadastro do Facebook');
  console.log(info);
  divRightContent.innerHTML = '';
  divRightContent.innerText = `Olá, ${info.firstname} ${info.lastname}
  ${info.phone_email}
  ${info.birthdate}
  ${info.gender}
  `;
};

console.log(formOpenAccount);

function buttonIn() {
  alert(inputEmailPhone.value);
}

buttonGetIn.addEventListener('click', buttonIn);

/* Requisito 18: verificando se algum dos campos é vazio: */
const buttonSubmitForm = document.getElementById('facebook-register');

const idMessegeError = 'messege-error';
const isValidFunction = (isValid, objectLocalStorage) => {
  if (!isValid) {
    const p = document.createElement('p');
    p.setAttribute('id', idMessegeError);
    p.style.color = 'rgb(255, 0, 0)';
    p.innerText = 'Campos inválidos';
    formOpenAccount.prepend(p);
  } else {
    getInfoSignUp(objectLocalStorage);
  }
};

const setMessegeEmpty = () => {
  if (document.getElementById(idMessegeError)) {
    document.getElementById(idMessegeError).innerText = '';
  }
};

function validateForm(event) {
  event.preventDefault();
  setMessegeEmpty();
  let isValid = true; const objectLocalStorage = {};
  const inputs = ['firstname', 'lastname', 'phone_email',
    'password', 'birthdate', 'gender'];
  for (let index = 0; index < inputs.length; index += 1) {
    const content = document.forms.form[inputs[index]].value;
    if (content === '' || content.includes(' ')) {
      isValid = false;
    } else {
      const field = inputs[index];
      objectLocalStorage[field] = content;
    }
  }
  isValidFunction(isValid, objectLocalStorage);
}

if (buttonSubmitForm) {
  buttonSubmitForm.addEventListener('click', validateForm);
}

/* Requisito 19: */

genderPersonality.addEventListener('click', () => {
  const divPai = document.getElementById('campo-gender-personality');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  divPai.appendChild(input);
});
