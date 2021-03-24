const login = document.getElementById('button-login');
const radioBtn = document.querySelector('.gender-radio');
const registroBtn = document.getElementById('facebook-register');
const novoCad = [];
const nome = document.getElementById('first-name');
const sobrenome = document.getElementById('last-name');
const email = document.getElementById('email');
const niver = document.getElementById('birthdate');
const right = document.querySelector('.right-content');
const error = document.getElementById('error');

// function clickLogin() {
//   const valor = document.getElementById('user-email-phone');

//   alert(valor.value);
// }

// login.addEventListener('click', clickLogin);

// ou podemos refatorar para o seguinte código para ficar mais simples:

const clickLogin = () => {
  login.addEventListener('click', () => {
    const valor = document.getElementById('user-email-phone');
    window.alert(valor.value);
  });
};

// gera o campo para adicionar genero personalizado

const selectGender = () => {
  radioBtn.addEventListener('click', () => {
    const personalized = document.getElementById('gender-custom');
    if (document.getElementById('P').checked === true) {
      personalized.classList.remove('alter-gender');
    } else {
      personalized.classList.add('alter-gender');
    }
  });
};

// apaga todo o formulario na esquerda

function apaga() {
  right.innerHTML = '';
}

// cria os paragrafos com os textos dos valores do formularios

// como o lint tava reclamando que a linha estava muito grande com tudo junto, separei cada valor em um paragrafo

function escreve() {
  const boasVindas1 = document.createElement('p');
  boasVindas1.innerText = `Olá, ${novoCad[0]} ${novoCad[1]}
  Email: ${novoCad[2]}
  Nascimento: ${novoCad[3]}
  Genero: ${novoCad[4]}`;
  right.appendChild(boasVindas1);
}

// validador

const inputText = document.querySelectorAll('.campo');
let parar;

function validator() {
  let contador = 0;
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      contador += 1;
    }
  }
  if (contador > 0) {
    error.classList.remove('return-form');
    parar = true;
  }
}

// armazena os valores do form no array

function grava() {
  novoCad.push(nome.value);
  novoCad.push(sobrenome.value);
  novoCad.push(email.value);
  novoCad.push(niver.value);
  if (document.getElementById('F').checked) {
    novoCad.push(document.getElementById('F').value);
  } else if (document.getElementById('M').checked) {
    novoCad.push(document.getElementById('M').value);
  } else { novoCad.push('Personalizado'); }
}

// função ao clicar no botao de cadastro

const registro = () => {
  registroBtn.addEventListener('click', (event) => {
    validator();
    if (parar === true) {
      event.preventDefault();
      parar = false;
    } else {
      grava();
      apaga();
      escreve();
    }
  });
};

window.onload = () => {
  clickLogin();
  selectGender();
  registro();
};
