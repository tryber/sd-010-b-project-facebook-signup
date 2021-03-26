const consButton = document.querySelector('#button-login');
const consButtonRegister = document.querySelector('#facebook-register');
const body = document.querySelector('.right-content');
const consButtonLogin = document.querySelector('#button-login');

consButton.addEventListener('click', (event) => {
  event.preventDefault();
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
});

consButtonRegister.addEventListener('click', (event) => {
  event.preventDefault();
  const auxSpan = document.querySelector('span');
  auxSpan.innerHTML = '';
  const constValidar = document.querySelectorAll('.input-text');
  for (let index = 0; index < constValidar.length; index += 1) {
    if (constValidar[index].value === '') {
      auxSpan.innerText = 'Campos inválidos';
    }
  }
});
