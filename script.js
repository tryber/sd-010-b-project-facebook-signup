function alertEntrar() {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
}

document.getElementById('button-login').addEventListener('click', alertEntrar);
const radioButtonPersonalizado = document.getElementById('Personalizado');

function createCustomGenderInput() {
  const input = document.querySelector('.custom-gender-container');
  if (input.firstChild == null) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    input.appendChild(newInput);
  }
}

radioButtonPersonalizado.addEventListener('click', createCustomGenderInput);

function removeCustomGenderInput() {
  const div = document.querySelector('.custom-gender-container');
  const input = div.firstChild;
  if (input != null) {
    div.removeChild(input);
  }
}

const masc = document.getElementById('Masculino');
masc.addEventListener('click', removeCustomGenderInput);
const fem = document.getElementById('Feminino');
fem.addEventListener('click', removeCustomGenderInput);

function requisito18() {
  const check = document.querySelectorAll(':required');
  let s = 0;
  for (let i = 0; i < check.length; i += 1) {
    if (check[i].value === '') {
      s += 1;
    }
  }
  if (s > 0) {
    document.querySelector('.invalido').innerHTML = 'Campos inválidos';
    return false;
  }
  return true;
}

function requisito20() {
  const getCheckedButton = document.querySelector(':checked');
  const getTypeInput = document.querySelectorAll('input[type=text]');
  const rightContent = document.querySelector('.right-content');
  const firstName = getTypeInput[0].value;
  const lastName = getTypeInput[1].value;
  const emailCelphone = getTypeInput[2].value;
  const birthDate = getTypeInput[3].value;
  const gender = getCheckedButton.value;
  const newP = document.createElement('p');
  rightContent.innerHTML = '';
  newP.innerText = `Olá, ${firstName} ${lastName}
  E-mail ou telefone: ${emailCelphone}
  Data de Nascimento: ${birthDate}
  Gênero: ${gender}`;
  rightContent.appendChild(newP);
}

const req18 = document.getElementById('facebook-register');
req18.addEventListener('click', () => {
  requisito18();
  if (requisito18() === true) {
    requisito20();
  }
});
