const buttonId = document.getElementById('button-login');

buttonId.addEventListener('click', () => {
  const valueFirst = document.getElementById('user-email-phone').value;
  alert(valueFirst);
});

// Estava com dificuldade para passar no Lint, pois sempre ficava apontando uma função inesperada. Depois de olhar alguns códigos de alguns colegos utilizei o => ao invés da função e o Lint aceitou.

const facebookRegister = document.querySelector('#facebook-register');
const facebookForm = document.querySelector('.facebook-form');
const inputsForm = facebookForm.getElementsByTagName('input');

function checkFirst() {
  let first;
  for (let index = 0; index <= 4; index += 1) {
    if (inputsForm[index].value === '') {
      first = true;
      break;
    } else {
      first = false;
    }
  }
  return first;
}

function checkSecond() {
  let second = false;
  const five = inputsForm[5].checked;
  const six = inputsForm[6].checked;
  const seven = inputsForm[7].checked;
  const checked = [five, six, seven];
  for (let index = 0; index < checked.length; index += 1) {
    if (checked[index] === false) {
      second = true;
    } else {
      second = false;
      break;
    }
  }
  return second;
}

function newP() {
  const newPar = document.createElement('p');
  newPar.innerText = 'Campos inválidos';
  document.querySelector('.facebook-form').appendChild(newPar);
}

function checkBoth() {
  checkFirst();
  checkSecond();
  if (checkFirst() === true || checkSecond() === true) {
    newP();
  }
}

// Para o request 18, recebemos ajuda do nosso colega Antenor Zapata pelo slack, que explicou como usar o .preventDefault();

const newGender = inputsForm[7];

newGender.addEventListener('click', () => {
  const newInput = document.createElement('input');
  const genderInputs = document.getElementById('other-gender');
  genderInputs.appendChild(newInput);
  const attribute1 = document.createAttribute('type');
  const attribute2 = document.createAttribute('name');
  const attribute3 = document.createAttribute('placeholder');
  attribute1.value = 'text';
  attribute2.value = 'gender-custom';
  attribute3.value = 'Gênero (opcional)';
  newInput.setAttributeNode(attribute1);
  newInput.setAttributeNode(attribute2);
  newInput.setAttributeNode(attribute3);
});

// aprendi a criar atributos lendo um artigo no site Clube do Hardware, src: https://www.clubedohardware.com.br/topic/1274438-criar-um-formul%C3%A1rio-com-elementos-inputs-s%C3%B3-com-javascript/

const rightContent = document.querySelector('.right-content');

function createPs() {
  const newText = document.createElement('p');
  const newEmail = document.createElement('p');
  const newDate = document.createElement('p');
  const genderNew = document.createElement('p');
  return {
    newText,
    newEmail,
    newDate,
    genderNew,
  };
}

function getValues() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const emailPhone = document.getElementById('email-phone').value;
  const birthDate = document.getElementById('birth-date').value;
  return {
    firstName,
    lastName,
    emailPhone,
    birthDate,
  };
}

function newRightContent() {
  const ps = createPs();
  const values = getValues();
  ps.newText.innerText = `Olá, ${values.firstName} ${values.lastName}`;
  ps.newEmail.innerText = values.emailPhone;
  ps.newDate.innerText = values.birthDate;
  if (inputsForm[5].checked === true) {
    ps.genderNew.innerText = inputsForm[5].value;
  } else if (inputsForm[6].checked === true) {
    ps.genderNew.innerText = inputsForm[6].value;
  } else {
    ps.genderNew.innerText = inputsForm[7].value;
  }
  rightContent.innerHTML = '';
  rightContent.appendChild(ps.newText);
  rightContent.appendChild(ps.newEmail);
  rightContent.appendChild(ps.newDate);
  rightContent.appendChild(ps.genderNew);
}

function checkBothTrue() {
  checkFirst();
  checkSecond();
  if (checkFirst() !== true && checkSecond() !== true) {
    newRightContent();
  }
}

facebookRegister.addEventListener('click', (e) => {
  e.preventDefault();
  checkBoth();
  checkBothTrue();
});
