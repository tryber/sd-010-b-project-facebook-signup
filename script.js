const loginBtn = document.querySelector('#button-login');
const inputsCadastro = document.querySelectorAll('.input-cadastro');
const user = document.querySelector('#user-email-phone');
const inputsGender = document.querySelectorAll('.input-gender');
const genderPersonalizado = document.querySelector('#personalizado');
const cadastroBtn = document.querySelector('#facebook-register');

function validaInputs() {
  let inputInvalido = false;
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    if (!inputsCadastro[i].value) {
      inputInvalido = true;
    }
  }
  return inputInvalido;
}

function validateGender() {
  let validaGender = false;
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      validaGender = true;
    }
  }
  return validaGender;
}

function selecionarGender() {
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      return inputsGender[i].value;
    }
  }
}

function validaCadastro() {
  let valido = true;
  const erro = document.querySelector('#campos-invalidos');
  erro.innerHTML = '';

  const formCadastro = document.querySelector('#form-cadastro');

  if (!validateGender() || validaInputs()) {
    erro.innerHTML = 'Campos inválidos';
    valido = false;
  }

  formCadastro.appendChild(erro);
  return valido;
}

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const res = user.value;
  return alert(res);
});

genderPersonalizado.addEventListener('click', () => {
  const novoInput = document.createElement('input');
  novoInput.setAttribute('name', 'gender-custom');
  novoInput.setAttribute('placeholder', 'Gênero (opcional)');
  novoInput.className = 'input-cadastro';

  const genders = document.querySelector('.genders');

  genders.insertAdjacentElement('afterend', novoInput);
});

cadastroBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (validaCadastro()) {
    const rightContent = document.querySelector('.right-content');

    rightContent.innerHTML = `
      Olá, ${inputsCadastro[0].value} ${inputsCadastro[1].value}
      ${inputsCadastro[2].value}
      ${inputsCadastro[4].value}
      ${selecionarGender()}
    `;
  }
});
