const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');
const clickCad = document.getElementById('facebook-register');
const inputForm = document.querySelectorAll('main form input');
const textForm = document.getElementById('text-form');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);

const formValidate = () => {
  for (let index = 0; index < inputForm.length; index += 1) {
    let counter = 0;
    if (inputForm[index].value === '') {
      counter += 1;
    }

    if (counter !== 0) {
      textForm.innerText = 'Campos inválidos';
    }
  }
  return inputForm;
};

clickCad.addEventListener('click', formValidate);
