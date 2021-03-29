const btnLogin = document.getElementById('button-login');
const txtEmailtel = document.getElementById('user-email-phone');

function elertEmail() {
  alert(txtEmailtel.value);
}

btnLogin.addEventListener('click', elertEmail);

function switchGenderCustom(origin) {
  const element = origin.target.id;

  if (element === 'other') {
    document.getElementById('gender-custom').style.display = 'inline';
  } else if (element === 'female' || element === 'male') {
    document.getElementById('gender-custom').style.display = 'none';
  }
}

const radioBtns = document.getElementsByName('gender');

for (let index = 0; index < radioBtns.length; index += 1) {
  radioBtns[index].addEventListener('change', switchGenderCustom);
}

function checkInputValues() {
  const inputs = document.getElementsByTagName('input');
  let emptyInput = 0;
  for (let i = 2; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      emptyInput += 1;
    }
  }
  return emptyInput;
}

const takesSelectedGender = () => {
  const gender = document.getElementsByName('gender');
  let selectedGender;
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      selectedGender = gender[i];
    }
  }
  return selectedGender;
};

const createInputObj = () => {
  const inputObj = {};
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const phoneEmail = document.getElementById('phone_email');
  console.log(phoneEmail);
  const birthDate = document.getElementById('birth-date');
  const selectedGender = takesSelectedGender();
  inputObj.firstName = firstName.value;
  inputObj.lastName = lastName.value;
  inputObj.phoneEmail = phoneEmail.value;
  inputObj.birthDate = birthDate.value;
  console.log(inputObj);
  inputObj.selectedGender = selectedGender.value;
  return inputObj;
};

function customizeRightContent() {
  const rightContent = document.querySelector('.right-content');
  const inputObj = createInputObj();
  rightContent.innerHTML = '';
  const customH3 = document.createElement('h3');
  customH3.innerText = `Olá, ${inputObj.firstName} ${inputObj.lastName}`;
  rightContent.appendChild(customH3);
  const customP = document.createElement('p');
  customP.innerText = `Celular/E-mail: ${inputObj.phoneEmail}
  Data de Nascimento: ${inputObj.birthDate}
  Gênero: ${inputObj.selectedGender}`;
  rightContent.appendChild(customP);
}

const submitBtn = document.getElementById('facebook-register');
submitBtn.addEventListener('click', () => {
  if (checkInputValues() > 2) {
    const alert = document.getElementById('alert');
    alert.innerText = 'Campos inválidos';
  } else {
    customizeRightContent();
  }
});

const returnFalse = () => false;

returnFalse();

//#VQV
