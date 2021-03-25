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

const inputCadastro = document.querySelectorAll('.right-content input');
const inputRadio = document.querySelectorAll('#gender-container input');
const cadastrar = document.querySelector('#facebook-register');
let aux = [];
let aux2 = false;

function printInvalido() {
  if ((aux.length < 4) || (aux2 === false)) {
    const alerta = document.querySelector('footer');
    const p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    p.style.fontSize = '25px';
    p.style.fontWeight = '900';
    alerta.appendChild(p);
  }
}

cadastrar.addEventListener('click', () => {
  for (let i = 0; i < inputCadastro.length -5; i += 1) {
    aux.push(inputCadastro[i].value);
  }
  for (let i = 0; i < inputRadio.length; i += 1) {
    if (inputRadio[i].checked === true) {
      aux2 = true;
    }
  }
  printInvalido();
});
