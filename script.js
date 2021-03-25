const buttonEntrar = document.getElementById('button-login');

// const form = document.getElementById('forms');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);

// Validações
function invalid() {

  const errorMessage = document.querySelector('.error-message');
  errorMessage.innerText = 'Campo inválido - confira seus dados!';
}

const getForms = document.getElementById('forms');

function validate(event) {
  event.preventDefault();
  const arrayInfoUser = document.querySelectorAll('.info-user');

  for (let index = 0; index < arrayInfoUser.length; index += 1) {
    if (arrayInfoUser[index].value === '') {
      invalid();
    }
  }
}
getForms.addEventListener('submit', validate);
