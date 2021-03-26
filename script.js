const buttomLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
buttomLogin.addEventListener('click', () => {
  alert(loginValue.value);
});

const cadastro = document.getElementById('facebook-register');
// const radioValue = document.querySelector('input[name="gender"]:checked');
const contaneirForms = document.querySelector('.thingamagig');

const verificaNull = () => {
  const invalidos = document.querySelectorAll('.camposInvalidos');
  let valido = false;
  for (let index = 0; index < invalidos.length; index += 1) {
    if (invalidos[index].value === '') {
      valido = true;
    }
  }
  return valido;
};

cadastro.addEventListener('click', () => {
  const text = document.createElement('div');
  text.innerText = 'Campos inválidos';
  if (verificaNull()) {
    contaneirForms.appendChild(text);
  }
});
