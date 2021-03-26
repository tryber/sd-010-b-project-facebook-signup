const buttomLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
buttomLogin.addEventListener('click', () => {
  alert(loginValue.value);
});

const cadastro = document.getElementById('facebook-register');
// const radioValue = document.querySelector('input[name="gender"]:checked');

const verificaNull = () => {
  const invalidos = document.querySelectorAll('.camposInvalidos');
  let valido;
  for (let index = 0; index < invalidos.length; index += 1) {
    if (invalidos[index].value === '') {
      valido = true;
    } else {
      valido = false;
    }
  }
  return valido;
};

cadastro.addEventListener('click', (event) => {
  event.preventDefault()
  const contaneirForms = document.querySelector('.thingamagig');
  const text = document.createElement('p');
  text.innerText = 'Campos inválidos';
  if (verificaNull()) {
    contaneirForms.appendChild(text);
  }
});
