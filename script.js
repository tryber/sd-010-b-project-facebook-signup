const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

const buttonCadastre = document.querySelector('#facebook-register');

function carregaUser() {
  const user = [];
  user.push(document.querySelector('#firstname').value);
  user.push(document.querySelector('#lastname').value);
  user.push(document.querySelector('#phone_email').value);
  user.push(document.querySelector('#birthdate').value);
  return user;
}

function preencheLogin(contentRight) {
  const user = carregaUser();
  const login = document.createElement('p');
  login.innerText = `Olá, ${user[0]} ${user[1]} \n${user[2]}\n${user[3]}`;
  contentRight.appendChild(login);
}

function checaForm(event) {
  const inputsToCheck = document.querySelectorAll('.AbraConta .toCheck');
  const AbraContaForm = document.querySelector('.AbraConta');
  const contentRight = document.querySelector('.right-content');
  let contador = 0;
  for (let input = 0; input < inputsToCheck.length; input += 1) {
    if (inputsToCheck[input].value === '') {
      event.preventDefault();
      const aviso = document.createElement('p');
      aviso.innerText = 'Campos inválidos';
      AbraContaForm.append(aviso); break;
    } else {
      contador += 1;
    }
  }
  if (contador === 5) {
    event.preventDefault();
    preencheLogin(contentRight);
  }
}

buttonCadastre.addEventListener('click', (event) => {
  checaForm(event);
});

const genderSelect = document.querySelector('#genderSelect');
const radioPerson = document.querySelector('#pers');

radioPerson.addEventListener('click', () => {
  const inputPerson = document.createElement('input');
  inputPerson.id = 'Personalizado';
  inputPerson.name = 'gender-custom';
  inputPerson.placeholder = 'Gênero (opcional)';
  genderSelect.appendChild(inputPerson);
});
