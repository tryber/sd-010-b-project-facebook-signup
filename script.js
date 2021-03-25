const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');
const clickCad = document.getElementById('facebook-register');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);

clickCad.addEventListener('click', camposInvalidos);

function camposInvalidos() {
  const divMensagem = document.getElementById('div_mensagem');
  const nome = document.getElementById('nome');
  const sobrenome = document.getElementById('sobrenome');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const dataDeNascimento = document.getElementById('data_de_nascimento');
  const generoM = document.getElementById('masculino');
  const generoF = document.getElementById('feminino');
  const generoP = document.getElementById('personalizado');

  if (nome.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (sobrenome.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (email.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (senha.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (dataDeNascimento.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (generoF.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (generoM.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else if (generoP.value === '') {
    divMensagem.innerHTML = 'Campos Inválidos';
  } else {
    divMensagem.innerHTML = ''
  }
}
