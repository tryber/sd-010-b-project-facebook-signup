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







































//começar aqui 
// if (xxxx === true) {
//   document.querySelector('.right-content').style.display = 'none';

  
// }
document.querySelector('.right-content').style.display = 'none';
const containerRight = document.querySelector('.right-content')

let firstName = document.querySelector('#name').value;
firstName = "lucas"

let lastName = document.querySelector('#subName').value;
lastName = "lotar"


let fullName = `Olá, ${firstName} ${lastName}`;
let divElement = document.createElement('div');
divElement.innerHTML = fullName;
containerRight.appendChild(divElement);



