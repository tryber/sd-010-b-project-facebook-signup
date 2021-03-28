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
