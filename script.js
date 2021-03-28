const btnEntrar = document.getElementById('button-login');
const userLogin = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => {
  alert(userLogin.value);
});

const btnRegister = document.getElementById('facebook-register');
const inputArray = document.getElementById('name-password');
const inputs = inputArray.getElementsByTagName('input');
const form = document.getElementById('register');
const span = document.createElement('span');

const nm = document.getElementById('fsName').value;
const surName = document.getElementById('lsName').value;
const complete = `Olá, ${nm} ${surName}`;
const email = document.getElementById('celEmail').value;
const date = document.getElementById('dt').value;
const p = '.gnd[name]:checked';
const gend = document.querySelector(p).value;
const rgtContent = document.querySelector('.right-content');
const itens = [complete, email, date, gend];

btnRegister.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      inputs.value = '';
      span.innerHTML = 'Campos inválidos';
      form.append(span);
      return;
    }
  }
  while (rgtContent.firstChild) {
    rgtContent.removeChild(rgtContent.lastChild);
  }
  for (let index = 0; index < itens.length; index += 1) {
    const element = document.createElement('p');
    element.innerHTML = itens[index];
    rgtContent.appendChild(element);
  }
});

const gender = document.getElementById('gender');

gender.addEventListener('click', () => {
  if (document.querySelector(p).value === 'Personalizado') {
    document.querySelector('.gnd-c').style.display = 'block';
  }
  if (document.querySelector(p).value !== 'Personalizado') {
    document.querySelector('.gnd-c').style.display = 'none';
  }
});
