const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');
const clickCad = document.getElementById('facebook-register');
const inputForm = document.querySelectorAll('main form input');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);

function camposInvalidos() {
  const clickSiginup = document.querySelectorAll('input');
  const novoP = document.createElement('p');
  const textoP = document.createTextNode('Campos Inválidos');
  const divAtual = document.getElementById('div_mensagem');
  const form = document.getElementById('form_cad');
  let cont = false;
  for (let index = 0; index < clickSiginup.length; index += 1) {
    if (clickSiginup[index].value === '') {
      cont = true;
    }
  }
  if (cont === false) {
    novoP.appendChild(textoP);
    form.insertBefore(novoP, divAtual);
  }
  return inputForm;
}

clickCad.addEventListener('click', camposInvalidos);
