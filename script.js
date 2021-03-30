const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');
const genderPersonality = document.getElementById('input-gender-personality');
const divRightContent = document.getElementsByClassName('right-content')[0];
const formOpenAccount = document.querySelector('[name="form"]');

/* Requisito 20: */

const getStorageInfoSignUp = () => {
  // console.log('localizei informações do cadastro do Facebook');
  let info = localStorage.getItem('infoUserFacebook');
  console.log(info);
  info = JSON.parse(info);
  divRightContent.innerHTML = '';
  divRightContent.innerText = `Olá, ${info.firstname} ${info.lastname}
  ${info.phone_email}
  ${info.birthdate}
  ${info.gender}
  `;
};

/* Se as informações foram preenchidas pelo usuário anteriormente, ele retorna uma mensagem na tela de login: */
if (localStorage.getItem('infoUserFacebook')) {
  getStorageInfoSignUp();
}

console.log(formOpenAccount);

function buttonIn() {
  alert(inputEmailPhone.value);
}

buttonGetIn.addEventListener('click', buttonIn);

/* Requisito 18: verificando se algum dos campos é vazio: */
const buttonSubmitForm = document.getElementById('facebook-register');
/* Função para adicionar informações ao localStorage: */
const addLocalStorage = (jsonInfoFacebook) => {
  localStorage.setItem('infoUserFacebook', jsonInfoFacebook);
};

const idMessegeError = 'messege-error';
const isValidFunction = (isValid, objectLocalStorage) => {
  if (!isValid) {
    const p = document.createElement('p');
    p.setAttribute('id', idMessegeError);
    p.style.color = 'rgb(255, 0, 0)';
    p.innerText = 'Campos inválidos';
    formOpenAccount.prepend(p);
  } else {
    addLocalStorage(JSON.stringify(objectLocalStorage));
    getStorageInfoSignUp();
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
