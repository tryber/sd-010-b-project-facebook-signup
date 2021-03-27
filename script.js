const buttonEntrar = document.getElementById('button-login');

// const form = document.getElementById('forms');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);

// Validações
function invalid() {
  const errorMessage = document.querySelector('.error-message');
  errorMessage.innerText = 'Campos inválidos';
}

const getForms = document.getElementById('forms');
// const allInputs = document.querySelectorAll('.inputs');
const rightContent = document.querySelector('.right-content');
const mainContent = document.querySelector('.main-content');
const paragrafo = document.createElement('p');
const div = document.createElement('div');
// const mensagem = document.getElementsByClassName('error-message');

function validate(event) {
  event.preventDefault();
  const arrayUser = document.querySelectorAll('.info-user');
  for (let index = 0; index < arrayUser.length; index += 1) {
    const generoSelec = document.querySelector('input[name="gender"]:checked');
    if (arrayUser[index].value === '') {
      invalid();
    } else {
      paragrafo.innerHTML = `Olá, ${arrayUser[0].value} ${arrayUser[1].value}
      ${arrayUser[2].value}, ${arrayUser[4].value}, ${generoSelec.value}`;
      paragrafo.id = 'novo-paragrafo';
      mainContent.removeChild(rightContent);
      mainContent.appendChild(div);
      div.className = 'right-content';
      div.appendChild(paragrafo);
    }
  }
}
getForms.addEventListener('submit', validate);

// Requisito 19
const radioPerso = document.getElementById('radio-buttons-pers');
const radioMasc = document.getElementById('radio-buttons-masc');
const radioFemin = document.getElementById('radio-buttons-fem');

function inputPersonalizado() {
  const genderCustom = document.getElementById('gender-custom');
  genderCustom.style.display = 'block';
}

function inputNormal() {
  const genderCustom = document.getElementById('gender-custom');
  genderCustom.style.display = 'none';
}

radioFemin.addEventListener('click', inputNormal);
radioMasc.addEventListener('click', inputNormal);
radioPerso.addEventListener('click', inputPersonalizado);
