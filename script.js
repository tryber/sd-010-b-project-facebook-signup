const buttonLogin = document.getElementById('button-login');
const mailOrPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(mailOrPhone.value);
});

const fm = document.querySelector('#f');
const mm = document.getElementById('m');
let count = 0;

function testaRadio() {
  localStorage.gender = '';
  if (fm.checked) {
    localStorage.gender = 'Feminino';
  } else if (mm.checked) {
    localStorage.gender = 'Masculino';
  } else {
    localStorage.gender = 'Personalizado';
  }
}

function secondRightContent() {
  const containerRC = document.querySelector('.right-content');
  const saveName = (document.getElementById('first-name').value);
  const saveLastName = (document.getElementById('lastName').value);
  const saveDate = (document.getElementById('date').value);
  const saveEmail = (document.getElementById('email').value);
  testaRadio();
  const creatP = document.createElement('p');
  creatP.classList = 'userData';
  creatP.innerText = `Olá, ${saveName} ${saveLastName}
  E-mail: ${saveEmail}
  Data: ${saveDate}
  Genero: ${localStorage.gender}`;
  containerRC.innerHTML = '';
  containerRC.appendChild(creatP);
}

function verifyInputs() {
  const registerButton = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('.right-content input');
  const errorMesage = document.getElementById('invalid-field');

  registerButton.addEventListener('click', (e) => {
    for (let i = 0; i < inputs.length - 1; i += 1) {
      if (inputs[i].value === '' || inputs[i].value === ' ') {
        errorMesage.innerHTML = 'Campos inválidos';
        count += 1;
        e.preventDefault();
      }
    }
    if (count === 0) {
      secondRightContent();
    }
  });
}

verifyInputs();

function personalizedGender() {
  const customGender = document.querySelectorAll('input[name="gender"]');
  const inputGenderCustom = document.querySelector('.gender-custom');

  for (let i = 0; i < customGender.length; i += 1) {
    customGender[i].addEventListener('click', () => {
      if (customGender[i].value === 'Personalizado') {
        inputGenderCustom.style.display = 'block';
      } else {
        inputGenderCustom.style.display = 'none';
      }
    });
  }
}

personalizedGender();
