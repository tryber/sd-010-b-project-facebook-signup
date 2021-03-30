const button = document.getElementById('button-login');
const faceregister = document.getElementById('facebook-register');

/* Cria função alerta do botão do campo login, mostrando o email ou telefone */
function alertButton() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}

/* Função que verifica se os campos do formulário estão preenchidos e mostra mensagem Campo Inválido */
function checks() {
  const verifica = document.querySelectorAll('.right-content :required');
  for (let i = 0; i < verifica.length; i += 1) {
    if (verifica[i].value === '') {
      const formInput = document.getElementById('campos');
      formInput.innerHTML = ' Campos inválidos';
      return false;
    }
  }
  return true;
}

const customGenderRadio = document.getElementById('custom');
const customGenderInput = document.getElementById('gender-custom');
const genderRadio = document.querySelectorAll('input[name=gender]');

/* Verifica se o elemento "linkado" é igual à um determinado elemento, caso sim remove uma classe, se não, a remove. */
function elementToggleVisibility(event) {
  if (event.toElement === customGenderRadio) {
    customGenderInput.classList.remove('hidden');
  } else {
    customGenderInput.classList.add('hidden');
    customGenderInput.value = '';
  }
}

// Adiciona eventos de clique para os radio-buttons
function radioEventClick() {
  for (let element = 0; element < genderRadio.length; element += 1) {
    genderRadio[element].addEventListener('click', (e) => {
      elementToggleVisibility(e);
    });
  }
}

const registerForm = document.getElementById('register-form');
const rightContent = document.getElementById('right-content');
const i = document.querySelectorAll('.right-content input[type=text]');

const verifyCheckedRadio = (index, object, radioInput) => {
  const personalInfo = object;
  if (radioInput === customGenderRadio) {
    personalInfo[radioInput.name] = i[index].value;
  } else {
    personalInfo[radioInput.name] = radioInput.value;
  }
};

const createPersonalObject = () => {
  const personalInfo = {};
  for (let index = 0; index < i.length; index += 1) {
    const selectRadio = document.querySelectorAll('.right-content :checked')[0];
    if (i[index] === customGenderInput) {
      verifyCheckedRadio(index, personalInfo, selectRadio);
    } else {
      personalInfo[i[index].name] = i[index].value;
    }
  }
  return personalInfo;
};

const showInformation = (isValid) => {
  if (isValid) {
    const personalInfo = createPersonalObject();
    registerForm.classList.add('hidden');
    const info = document.createElement('div');
    rightContent.appendChild(info);
    info.innerText = `Olá, ${personalInfo.firstname} ${personalInfo.lastname}
Email ou Telefone: ${personalInfo.phone_email}
Data de Nascimento: ${personalInfo.birthdate}
Gênero: ${personalInfo.gender}
    `;
  }
};

window.onload = () => {
  button.addEventListener('click', alertButton);
  radioEventClick();
  faceregister.addEventListener('click', (e) => {
    const isValid = checks();
    showInformation(isValid);
    e.preventDefault();
  });
};
