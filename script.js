const button = document.getElementById('button-login');
const textAlert = document.getElementById('user-email-phone');
button.addEventListener('click', () => {
  alert(textAlert.value);
});

const opcaoPersonalizada = document.querySelector('#personalizado');
const escolhaGenero = document.querySelector('.genderChoice');
opcaoPersonalizada.addEventListener('click', () => {
  const gnrOpcional = document.getElementsByClassName('opcaoPersonalizada')[0];
  if (!gnrOpcional) {
    const inputP = document.createElement('input');
    inputP.type = 'text';
    inputP.name = 'gender-custom';
    inputP.placeholder = 'Gênero (opcional)';
    inputP.required = true;
    inputP.classList.add('opcaoPersonalizada');
    escolhaGenero.appendChild(inputP);
  }
});

const buttonSubmit = document.getElementById('facebook-register');
buttonSubmit.addEventListener('click', () => {
  const todosInputs = document.getElementsByClassName('input-formulario');
  const paragrafoAlerta = document.getElementById('paragrafo-alerta');
  for (let i = 0; i < todosInputs.length; i += 1) {
    if (!todosInputs[i].innerHTML) {
      paragrafoAlerta.innerText = 'Campos inválidos';
    }
  }
});
