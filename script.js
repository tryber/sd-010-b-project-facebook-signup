const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');
const clickCad = document.getElementById('facebook-register');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);

clickCad.addEventListener('click', campoInvalido);

function campoInvalido() {

  const clickSiginup = document.querySelectorAll('input');
  let cont = 0;

  for (let index = 0; index < clickSiginup.length; index += 1) {
    if (clickSiginup[index].value === '') {
      cont += 1;
    }
  }
  if (cont != 0) {
    alert('Campos inválidos');
  }
}
