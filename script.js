// Ao clicar no botão com o id #button-login deve exibir um alert com o valor do campo "Email ou telefone"

// O novo campo dever ser uma campo de texto com o atributo name "gender-custom" e um placeholder "Gênero (opcional)"
// O novo campo deve estar posicionado entre as opções de gênero e o botão "Cadastrar-se"

function esconder() {
  document.getElementById('genderPersonalizado').style.display = 'none';
}

function mostrar() {
  document.getElementById('genderPersonalizado').style.display = 'block';
}

document.getElementById('Per').addEventListener('click', mostrar);
document.getElementById('Mas').addEventListener('click', esconder);
document.getElementById('Fem').addEventListener('click', esconder);

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

const inputText = document.querySelectorAll('.validInput');
const inputRadio = document.querySelectorAll('.validInputRadio');
const cadastrar = document.querySelector('#facebook-register');

function validFormInput(inputText) {
  let value = [];
  for (let i = 0; i < inputText.length; i += 1) {
    (inputText[i].value === '') ? value[i] = false : value[i] = true;
  }
  return value;
}

function validInputRadio(inputRadio) {
  let value = -1;
  for (let i = 0; i < inputRadio.length; i += 1) {
    if (inputRadio[i].checked) {
      value = i;
    }
  }
  return value;
}

function paremt (valid1, valid2) {
  let aux = [];
  for (let i = 0; i < valid1.length; i += 1) {
    if (valid1[i] === false) {
      aux[0] = true;
    }
  }
  if (aux[0] !== true) {
    aux[0] = false;
  }
  (valid2 === -1) ? aux[1] = true : aux[1] = false;  
  if (valid2 === 2) {
    if (document.querySelector('.validInputRadioPersonalizado').value === '') {
      aux[1] = false;
    } 
  }
  return aux;
}

function printCampo(paremt) {
  if ((paremt[0] === true) || (paremt[1] === true)) {
    const alerta = document.querySelector('footer');
    const p = document.createElement('span');
    p.innerHTML = 'Campos inválidos';
    p.style.fontSize = '25px';
    p.style.fontWeight = '900';
    alerta.appendChild(p);
  } 
}

cadastrar.addEventListener('click', () => {   
  const valid1 = validFormInput(inputText);
  const valid2 = validInputRadio(inputRadio);
  const parametro = paremt(valid1, valid2);
  printCampo(parametro);
});