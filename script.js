const btnEntrar = document.getElementById('button-login');
const campEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => alert(campEmail.value));

const registerBtn = document.getElementById('facebook-register');
const campos = document.querySelectorAll('.input');

registerBtn.addEventListener('click', (event) => {
  const invalid = document.getElementById('invalid');
  for (let index = 0; index < campos.length; index += 1) {
    if (campos[index].value === '') {
      event.preventDefault();
      invalid.innerText = 'Campos inválidos';
    }
  }
});

const custom = document.getElementById('custom');
const male = document.getElementById('male');
const female = document.getElementById('female');

function customField(event) {
  const inputGender = document.getElementById('input-gender');
  const fieldGender = document.createElement('input');
  let checked = false;
  if (event.target.id === 'custom' && !checked) {
    checked = true;
    fieldGender.name = 'gender-custom';
    fieldGender.placeholder = 'Gênero (opcional)';
    fieldGender.type = 'text';
    inputGender.appendChild(fieldGender);
  } else if (event.target.id !== 'custom') {
    checked = false;
    inputGender.removeChild(fieldGender);
  }
}
custom.addEventListener('click', customField);
male.addEventListener('click', customField);
female.addEventListener('click', customField);
