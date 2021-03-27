const buttomLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
buttomLogin.addEventListener('click', () => {
  alert(loginValue.value);
});

const cadastro = document.getElementById('facebook-register');

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

const substituiCampo = document.querySelector('.right-content');
const formsCompleto = () => {
  const radioValue = document.querySelector('input[name="gender"]:checked');
  const nome = document.querySelector('#firstname').value;
  const sobreNome = document.querySelector('#lastname').value;
  const emailOuTelefone = document.querySelector('#phone_email').value;
  const DateNascimento = document.querySelector('#birthdate').value;
  const sexoDaPessoa = radioValue.value;
  const pai = substituiCampo.children;
  for (let index = 0; index < pai.length; index += 1) {
    substituiCampo.removeChild(pai[index]);
  }
  const criarDiv = document.createElement('p');
  criarDiv.innerText = `Olá, ${nome} ${sobreNome}
  ${emailOuTelefone}
  ${DateNascimento}
  ${sexoDaPessoa}
  Sua conta foi criada.`;
  substituiCampo.appendChild(criarDiv);
};

let cont = 0;
cadastro.addEventListener('click', (event) => {
  event.preventDefault();
  const contaneirForms = document.querySelector('.thingamagig');
  const text = document.createElement('p');
  text.className = 'invalido';
  text.innerText = 'Campos inválidos';
  if (verificaNull() && cont === 0) {
    cont += 1;
    contaneirForms.appendChild(text);
  } else {
    formsCompleto();
  }
});

const personalizado = document.querySelector('#pers');
personalizado.addEventListener('click', () => {
  const inputPers = document.createElement('input');
  inputPers.setAttribute('name', 'gender-custom');
  inputPers.setAttribute('placeholder', 'Gênero (opcional)');
  const contaneirForms = document.querySelector('.thingamagig');
  contaneirForms.appendChild(inputPers);
});
