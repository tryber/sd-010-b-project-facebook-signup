const button = document.getElementById('button-login');
const faceregister = document.getElementById('facebook-register');

/* Cria função alerta do botão do campo login, mostrando o email ou telefone */
function alertButton() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}

// function change() {
//   const elementos = document.querySelectorAll('input [type: text]');
//   const gender = document.querySelector('input[type:"radio"]:checked');
//   const p = document.createElement('p');
//   const div = document.createElement('div');

//   const message2 = document.createElement('h2');
//   message2.innerText = `Olá, ${elementos[0].value} ${elementos[1].value}`;
/* Função que verifica se os campos do formulário estão preenchidos e mostra mensagem Campo Inválido */
function checks() {
  const verifica = document.querySelectorAll(':required');
  for (let i = 0; i < verifica.length; i += 1) {
    if (verifica[i].value === '') {
      const formInput = document.getElementById('campos');
      formInput.innerHTML = ' Campos inválidos';
      return true;
    }
  }
}

const customGenderRadio = document.getElementById('custom');
const customGenderInput = document.getElementById('gender-custom');
const genderRadio = document.querySelectorAll('input[name=gender]');

/* Verifica se o elemento "linkado" é igual à um determinado elemento, caso sim remove uma classe, se não, a remove. */
function elementToggleVisibility(event) {
  if (event.toElement === customGenderRadio) {
    customGenderInput.classList.remove('hidden');
  } else {
    customGenderInput.classList.add('hidden');
    customGenderInput.value = '';
  }
}

// Adiciona eventos de clique para os radio-buttons
function radioEventClick() {
  for (let element = 0; element < genderRadio.length; element += 1) {
    genderRadio[element].addEventListener('click', (e) => {
      elementToggleVisibility(e);
    });
  }
}

window.onload = () => {
  button.addEventListener('click', alertButton);
  radioEventClick();
  faceregister.addEventListener('click', checks);
};
