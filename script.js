document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

const getTextInput = document.getElementsByClassName('inputForm');
const formButton = document.getElementById('facebook-register');
const textCamp = document.getElementById('divId');
const optionalGender = document.createElement('input');
const inputGender = document.getElementsByClassName('inputGender');
const content = document.getElementsByClassName('right-content');

function validateText() {
  let emptyInput = false;
  for (let x = 0; x < getTextInput.length; x += 1) {
    if (getTextInput[x].value === '') {
      emptyInput = true;
    }
  }
  return emptyInput;
}

function createCamp() {
  textCamp.appendChild(optionalGender);
  optionalGender.name = 'gender-custom';
  optionalGender.placeholder = 'Gênero (opcional)';
}

document.getElementById('personal').addEventListener('click', () => {
  createCamp();
});

function getGender() {
  let gender = '';
  for (let x = 0; x < inputGender.length; x += 1) {
    if (inputGender[x].checked) {
      gender = (inputGender[x].value);
    }
  }
  return (gender);
}

function createPhrase() {
  let phrase = '';
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const foneMail = document.getElementById('foneMail').value;
  const data = document.getElementById('data').value;
  const genero = getGender();
  phrase = `Olá, ${nome} ${sobrenome} ${foneMail} ${data} ${genero}.`;
  return (phrase);
}

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateText()) {
    document.getElementById('erro').innerText = 'Campos inválidos';
  } else {
    content[0].innerHTML = createPhrase();
  }
});
