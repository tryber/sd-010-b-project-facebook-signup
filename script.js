const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');
const genderPersonality = document.getElementById('input-gender-personality');

function buttonIn() {
  alert(inputEmailPhone.value);
}

buttonGetIn.addEventListener('click', buttonIn);

/* Requisito 18: verificando se algum dos campos é vazio: */
const buttonSubmitForm = document.getElementById('facebook-register');

function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  const inputs = ['firstname', 'lastname', 'phone_email',
    'password', 'birthdate', 'gender'];
  for (let index = 0; index < inputs.length; index += 1) {
    const content = document.forms.form[inputs[index]].value;
    if (content === '' || content.includes(' ')) {
      isValid = false;
    }
  }
  if (!isValid) alert('Campos inválidos');
  return false;
}

buttonSubmitForm.addEventListener('click', validateForm);

/* Requisito 19: */

genderPersonality.addEventListener('click', () => {
  const divPai = document.getElementById('campo-gender-personality');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  divPai.appendChild(input);
});
