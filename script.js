const botaoLogin = document.querySelector('#button-login');

function clica() {
  const campoEmail = document.querySelector('#user-email-phone').value;
  alert(campoEmail);
}

function clicaBotao() {
  botaoLogin.addEventListener('click', clica);
}

clicaBotao();

const botaoCadastro = document.querySelector('#facebook-register');

function criaAviso() {
  const div = document.querySelector('#verifica-cadastro');
  const p = document.createElement('p');
  div.appendChild(p).innerHTML = 'Campos Inválidos';
}

function verificaInput() {
  let naoValido = false;
  const cadastro = document.querySelectorAll('.cadastro');
  for (let index = 0; index < cadastro.length; index += 1) {
    if (cadastro[index].value === '') {
      naoValido = true;
    }
  }
  return naoValido;
}

function verificaRadio() {
  const cadastro = document.querySelectorAll('.radio');
  for (let index = 0; index < cadastro.length; index += 1) {
    if (cadastro[index].cheked) {
      return false;
    }
  }
  return true;
}

function clicaCadastro() {
  botaoCadastro.addEventListener('click', (e) => {
    if (verificaInput() || verificaRadio() === true) {
      criaAviso();
      e.preventDefault();
    }
  });
}

clicaCadastro();

function genero() {
  const divGenero = document.querySelector('#genderPersonalizado');
  const inputGender = document.createElement('input');
  const input = divGenero.appendChild(inputGender);
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
}

const personalizado = document.querySelector('#personalizado');

function clicaPersonalizado() {
  personalizado.addEventListener('change', genero);
}

clicaPersonalizado();
