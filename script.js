const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');
const clickCad = document.getElementById('facebook-register');
const inputForm = document.querySelectorAll('main form input');
const textForm = document.getElementById('text-form');
const inputPersonalizado = document.getElementById('personalizado');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);

clickCad.addEventListener('click', (event) => {
  for (let index = 0; index < inputForm.length; index += 1) {
    let counter = 0;
    if (inputForm[index].value === '') {
      counter += 1;
    }

    if (counter !== 0) {
      event.preventDefault();
      textForm.innerText = 'Campos inválidos';
    }
  }
  return inputForm;
});

inputPersonalizado.addEventListener('click', () => {
  const newInputCreated = document.getElementById('newInput');
  if (!newInputCreated) {
    const newInput = document.createElement('input');
    const divInputs = document.querySelector('.genero');
    divInputs.appendChild(newInput);
    newInput.placeholder = 'Gênero (opcional)';
    newInput.id = 'newInput';
  }
});
