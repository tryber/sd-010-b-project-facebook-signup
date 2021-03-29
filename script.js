const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');
const clickCad = document.getElementById('facebook-register');
const inputForm = document.querySelectorAll('main form input');
const textForm = document.getElementById('text-form');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);

<<<<<<< HEAD
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
=======
const formValidate = () => {
  for (let index = 0; index < inputForm.length; index += 1) {
    let counter = 0;
    if (inputForm[index].value === '') {
      counter += 1;
    }

    if (counter !== 0) {
      textForm.innerHTML = 'Campos inválidos';
    }
>>>>>>> 064541a2f4829a2d3ed3079e7aaf2eb003489628
  }
  return inputForm;
};

clickCad.addEventListener('click', formValidate);
