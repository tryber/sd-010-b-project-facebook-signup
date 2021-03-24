const buttonLogin = document.querySelector('#button-login');
const catchValueInput = document.querySelector('#user-email-phone');
const registerInputs = document.querySelectorAll('.input-register');
const registerButton = document.querySelector('#facebook-register');

buttonLogin.addEventListener('click', () => {
  if (catchValueInput.value !== '') {
    alert(catchValueInput.value);
  } else {
    alert('Campo Vazio');
  }
});

// validates all input fields
function validatesInputs() {
  let isValid = true;

  for (let i = 0; i < registerInputs.length; i += 1) {
    if (!registerInputs[i].value) {
      isValid = false;
    }
  }

  return isValid;
}

// validates the whole form
function validatesForm() {
  const errorField = document.querySelector('#error-message');

  if (!validatesInputs()) {
    errorField.innerHTML = 'Campos inválidos';
  }
}

registerButton.addEventListener('click', (event) => {
  event.preventDefault();

  validatesForm();
});

const pegaRadio = document.querySelector("#custom");
pegaRadio.addEventListener("click", () => {
const pegaContainer = document.querySelector("#gender-container");
const criaInput = document.createElement("input");
criaInput.name = "gender-custom";
criaInput.placeholder = "Gênero (opcional)";
pegaContainer.appendChild(criaInput);
})