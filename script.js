function buttonLogin() {
  alert(document.getElementById('user-email-phone').value);
}
document.getElementById('button-login').addEventListener('click', buttonLogin);

function showElement() {
  const custom = document.getElementById('gender-custom');
  custom.style.display = 'flex';
}

function addEventGenderCustom() {
  const custom = document.getElementById('other');
  custom.addEventListener('click', showElement);
}
addEventGenderCustom();

function hideElement() {
  const custom = document.getElementById('gender-custom');
  custom.style.display = 'none';
}

function addEventMaleFemale() {
  const male = document.getElementById('male');
  male.addEventListener('click', hideElement);
  const female = document.getElementById('female');
  female.addEventListener('click', hideElement);
}
addEventMaleFemale();

const validarCampos = () => {
  const el = document.getElementById('formCadastro').querySelectorAll('input');
  for (let index = 0; index < el.length; index += 1) {
    if (el[index].value === '') {
      el[index].placeholder = 'Campos inválidos';
    }
  }
};

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validarCampos);
