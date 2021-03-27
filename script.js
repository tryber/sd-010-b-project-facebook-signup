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

function validate(event) {
  event.preventDefault();
  const arrayInfoUser = document.querySelectorAll('.info-user');

  for (let index = 0; index < arrayInfoUser.length; index += 1) {
    const generoSelec = document.querySelector('input[name="gender"]:checked');
    if (arrayInfoUser[index].value === '') {
      invalid();
    } else{
      paragrafo.innerHTML = `Olá, ${arrayInfoUser[0].value} ${arrayInfoUser[1].value}
      ${arrayInfoUser[2].value}, ${arrayInfoUser[4].value}, ${generoSelec.value}`;
      paragrafo.id = 'novo-paragrafo';
      mainContent.removeChild(rightContent);
      mainContent.appendChild(div);
      div.className = 'right-content';
      div.appendChild(paragrafo);

    }
    
  }
}
getForms.addEventListener('submit', validate);

//Requisito 19
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

// Rquisito 20 e 18 TESTE
const allInputs = document.querySelectorAll('.inputs'); 
const rightContent = document.querySelector('.right-content');
const mainContent = document.querySelector('.main-content');
const paragrafo = document.createElement('p');
const div = document.createElement('div');
const mensagem = document.getElementsByClassName('error-message')

/*
function newCadastro (event) {
  event.preventDefault(); 
  for (let index = 0; index < allInputs.length; index += 1) {
    const generoSelec = document.querySelector('input[name="gender"]:checked');
    if (allInputs[index].value === '' || generoSelec === null) {
      mensagem.innerHTML = 'Campos inválidos';
      mensagem.style.color = 'red';
    } else {
      paragrafo.innerHTML = `Olá, ${allInputs[0].value} ${allInputs[1].value}
      ${allInputs[2].value}, ${allInputs[4].value}, ${generoSelec.value}`;
      paragrafo.id = 'novo-paragrafo';
      mainContent.removeChild(rightContent);
      mainContent.appendChild(div);
      div.className = 'right-content';
      div.appendChild(paragrafo);
    }
  } 
}

getForms.addEventListener('submit', newCadastro); */
