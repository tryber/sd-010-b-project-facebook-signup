document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

const getTextInput = document.getElementsByClassName('inputForm');
const formButton = document.getElementById('facebook-register');
const textCamp = document.getElementById('divId');
const optionalGender = document.createElement('input');

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
  for (let x = 0; x < document.getElementsByClassName('inputGender').length; x += 1) {
    if (document.getElementsByClassName('inputGender')[x].checked) {
    gender = (document.getElementsByClassName('inputGender')[x].value);  
    }
  }
  return (gender);
};

function createPhrase() {
  let phrase = '';
  const firstname = document.getElementsByClassName('inputForm')[0];
  const lastname = document.getElementsByClassName('inputForm')[1];
  const email = document.getElementsByClassName('inputForm')[2];
  const birhtdate = document.getElementsByClassName('inputForm')[4];
  const gender = getGender();
  phrase = `Olá, ${firstname} ${lastname} ${email} ${birhtdate} ${gender}`
  return (phrase);
};

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateText()) {
    document.getElementById('erro').innerText = 'Campos inválidos';
  } else {
    document.getElementsByClassName('right-content')[0].innerHTML = createPhrase();
  }
});
