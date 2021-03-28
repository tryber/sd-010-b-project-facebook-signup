const btnEntrar = document.getElementById('button-login');
const userLogin = document.getElementById('user-email-phone');
const gender = document.getElementById('gender');
const btnRegister = document.getElementById('facebook-register');
const inputArray = document.getElementById('name-password');
const inputs = inputArray.getElementsByTagName('input');
const form = document.getElementById('register');
const span = document.createElement('span');
const nM = document.getElementById('fsName');
const sN = document.getElementById('lsName');
const e = document.getElementById('celEmail');
const date = document.getElementById('dt');
const p = '.gnd[name]:checked';
let gnd = '';
const rgtContent = document.querySelector('.right-content');
// BRANCH ABIMAEL
btnEntrar.addEventListener('click', () => {
  alert(userLogin.value);
});

btnRegister.addEventListener('click', (event) => {
  event.preventDefault();
  const itens = [`Olá, ${nM.value} ${sN.value}`, e.value, date.value, gnd];
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

gender.addEventListener('click', () => {
  if (document.querySelector(p).value === 'Personalizado') {
    document.querySelector('.gnd-c').style.display = 'block';
  } else {
    document.querySelector('.gnd-c').style.display = 'none';
  }
  gnd = document.querySelector(p).value;
});
