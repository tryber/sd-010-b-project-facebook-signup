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

function validFormInput() {
  let resultInput = true;
  for (let i = 0; i < inputText.length; i += 1) {
    if (inputText[i] === false) {
      resultInput = false;
    }
  }    
  return resultInput;
}

function validInputRadio() {
  let resultRadio = false;
  for (let i = 0; i < inputRadio.length; i += 1) {
    if (inputRadio[i].checked) {
      resultRadio = true;
    } 
  }
  return resultRadio;
}

function paremt (valid1, valid2) {    
  if ((valid1 === true) && (valid2 === true)) {
    return true;
  } else {
    return false;
  } 
}

function printCampo(parametro) {
  if (parametro === false) {
    const alerta = document.querySelector('footer');
    const p = document.createElement('span');
    p.innerHTML = 'Campos inválidos';
    p.style.fontSize = '25px';
    p.style.fontWeight = '900';
    alerta.appendChild(p);
  }
}

cadastrar.addEventListener('click', () => {
  const valid1 = validFormInput();
  const valid2 = validInputRadio();
  const parametro = paremt(valid1, valid2);
  printCampo(parametro);
});
