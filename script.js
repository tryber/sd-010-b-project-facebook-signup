const boxGenerGustom = document.getElementById('gener-custom');
const bulletOptional = document.getElementById('radio-three');
const bulletGener = document.getElementsByName('gender');
const inputGenerCustom = document.getElementById('input-gener-custom');
const bulletGender = document.getElementsByName('gender');
const rgContent = document.querySelector('.right-content');
const btnRegister = document.getElementById('facebook-register');
const inpFName = document.getElementsByName('firstname');
const inpLName = document.getElementsByName('lastname');
const inpPEmail = document.getElementsByName('phone_email');
const inpPassword = document.getElementsByName('password');
const inpBirthdate = document.getElementsByName('birthdate');

function checkErrosForm(arrInput) {
  let erros = 0;
  arrInput.forEach((e) => {
    if (e === '') {
      erros += 1;
    }
  });

  return erros;
}

function checkErroFormBullet(input) {
  let boolean = false;
  input.forEach((e) => {
    if (e.checked) {
      boolean = true;
    }
  });
  return boolean;
}

function getInputs() {
  const inputs = [
    inpFName[0].value, inpLName[0].value,
    inpPEmail[0].value, inpPassword[0].value,
    inpBirthdate[0].value,
  ];

  return inputs;
}

function outputError() {
  const outputErrorr = document.getElementById('outPutErros');
  outputErrorr.innerText = 'Campos inválidos';
}

function alertUserEmailPhone() {
  const btnValidateLogin = document.getElementById('button-login');
  btnValidateLogin.addEventListener('click', (e) => {
    const userEmailPhone = document.getElementById('user-email-phone');

    alert(userEmailPhone.value);
    e.preventDefault();
  });
}

function showData(generCustom) {
  const buletterTrue = bulletGener[0].checked;
  const gener1 = bulletGener[0].value;
  const gener2 = bulletGener[1].value;
  rgContent.innerHTML = `
    <h1> Ola ${inpFName[0].value} ${inpLName[0].value}</h1>
    <p>Email-Telefone: ${inpPEmail[0].value}</p>
    <p>Data de Nascimento: ${inpBirthdate[0].value}<p>
  `;

  if (inputGenerCustom.value !== '') {
    rgContent.innerHTML += `<p>Genero: ${generCustom}</p>`;
  } else if (buletterTrue) {
    rgContent.innerHTML += `<p>Genero: ${gener1}</p>`;
  } else {
    rgContent.innerHTML += `<p>Genero: ${gener2}</p>`;
  }
}

function validateNewUser() {
  btnRegister.addEventListener('click', (e) => {
    const arrayInputs = getInputs();
    const generCustomIsHide = !boxGenerGustom.classList.contains('hide');
    if (checkErrosForm(arrayInputs) > 0 || !checkErroFormBullet(bulletGender)) {
      outputError();
    } else if (generCustomIsHide && inputGenerCustom.value === '') {
      outputError();
    } else {
      showData(inputGenerCustom.value);
    }

    e.preventDefault();
  });
}

function optionalGener() {
  bulletGener.forEach((ele) => {
    ele.addEventListener('click', () => {
      if (bulletOptional.checked) {
        boxGenerGustom.classList.remove('hide');
      } else {
        boxGenerGustom.classList.add('hide');
      }
    });
  });
}

alertUserEmailPhone();
validateNewUser();
optionalGener();
