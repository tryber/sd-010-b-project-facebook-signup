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
  const verifRadio = document.getElementById('verifRadio');
  const rd = verifRadio.querySelectorAll('input[name=gender]:checked');
  for (let index = 0; index < el.length; index += 1) {
    if (el[index].value === '') {
      document.getElementById('pHidden').hidden = '';
    }
  }
  if (rd.length === 0) {
    document.getElementById('pHidden').hidden = '';
  } else {
    const formCadastro = document.getElementById('formCadastro');
    const name = document.querySelectorAll('input')[2].value;
    const lastName = document.querySelectorAll('input')[3].value;
    const email = document.querySelectorAll('input')[4].value;
    const date = document.querySelectorAll('input')[7].value;
    formCadastro.innerHTML = `Olá ${name} ${lastName}, ${email}, ${date}`;
  }
};

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validarCampos);
