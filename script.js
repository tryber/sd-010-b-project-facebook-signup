const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');
const genderPersonality = document.getElementById('input-gender-personality');

function buttonIn() {
  alert(inputEmailPhone.value);
}

buttonGetIn.addEventListener('click', buttonIn);

/* Requisito 18: verificando se algum dos campos é vazio: */
function validateForm() {
  let isValid = true;
  const inputs = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate', 'gender'];
  for (let input of inputs) {
    const content = document.forms["form"][input].value;
    if (content === '') {
      isValid = false;
    }
  }
  if (!isValid) alert('Campos inválidos');
  return false;
}

const genderCampos = genderPersonality.addEventListener('click', () => {
  const divPai = document.getElementById('campo-gender-personality');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  divPai.appendChild(input);
});
