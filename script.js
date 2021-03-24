function login() {
  const getButton = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');

  getButton.addEventListener('click', () => {
    if (emailPhone.value.length > 0) {
      window.alert(`${emailPhone.value}`);
    }
  });
}

login();

function addOtherGender() {
  const radiosDiv = document.querySelector('.radios');
  console.log(radiosDiv);
  const otherGender = document.querySelector('#Personalizado');
  console.log(otherGender);

  otherGender.addEventListener('click', () => {
    if (otherGender.value !== 'checked') {
      const createInput = document.createElement('input');
      createInput.type = 'text';
      createInput.name = 'gender-custom';
      createInput.placeholder = 'Gênero (opcional)';
      createInput.className = 'other';

      radiosDiv.appendChild(createInput);
    }
  });
}

addOtherGender();

function formError() {
  const getButton = document.querySelector('#facebook-register');

  getButton.addEventListener('click', () => {
    const error = document.querySelector('.error');
    const inputName = document.getElementsByTagName('input');
    for (let item = 0; item < inputName.length; item += 1) {
      if (!inputName[item].value.length) {
        error.style.display = 'inline';
      }
    }
    return false;
  });
}

formError();
