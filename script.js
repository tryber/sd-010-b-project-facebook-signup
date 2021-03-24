//  Declarações:
const submitBtn = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');
const registerBtn = document.getElementById('facebook-register');
const alertIvalidField = document.getElementById('camposInvalidos');

//  Funções:
function alerta() {
  alert(user.value);
}

function verificarTexto() {
  const campos = document.querySelectorAll('.teste');
  campos.forEach((item) => {
    if (item.value === '') {
      alertIvalidField.innerHTML = 'Campos inválidos';
      item.classList.add('error');
    }
  });
}

//  Chamadas das funções:
submitBtn.addEventListener('click', alerta);
registerBtn.addEventListener('click', verificarTexto);
