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

const inputText = document.querySelectorAll('.checked');
const inputRadio = document.querySelectorAll('.checkedRadio');
const cadastrar = document.querySelector('#facebook-register');
let check = 0;
cadastrar.addEventListener('click', () => {
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index] === '') {
      check += 1;
    }
  }
  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked === false) {
      check += 1;
    }
  }
  if (check > 0) {
    //Função lucas
  } else {
    const alerta = document.querySelector('footer');
    const p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    p.style.fontSize = '25px';
    p.style.fontWeight = '900';
    alerta.appendChild(p);
  }  
});




































// aqui