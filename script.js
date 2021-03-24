const entrarButton = document.getElementById('button-login');
const femaleRadius = document.getElementById('userfemale');
const maleRadius = document.getElementById('usermale');
const optionRadius = document.getElementById('userother');

function alertMessage(evento) {
  evento.preventDefault();
  alert(document.getElementById('user-email-phone').value);
}

entrarButton.addEventListener('click', alertMessage);

function insertHide() {
  const name = document.getElementById('info');
  name.classList.add('hide');
}

function removeHide() {
  const name = document.getElementById('info');
  name.classList.remove('hide');
}

femaleRadius.addEventListener('click', insertHide);
maleRadius.addEventListener('click', insertHide);
optionRadius.addEventListener('click', removeHide);

let valid;

function validate() {
  valid = true;
  const inputs = document.querySelectorAll('#sign-up-form input');
  for (let i = 0; i < inputs.length - 1; i += 1) {
    if (inputs[i].value === '') {
      const validMsg = document.createElement('p');
      validMsg.innerText = 'Campos inválidos';
      const formCont = document.querySelector('#sign-up-form');
      formCont.appendChild(validMsg);
      valid = false;
      break;
    }
  }
  return valid;
}

function signUp() {
  const fistName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const birthDate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const rightCont = document.querySelector('.right-content');
  while (rightCont.hasChildNodes()) {
    rightCont.removeChild(rightCont.firstChild);
  }
  const newCont = document.createElement('div');
  newCont.innerHTML = `
    <p>Olá, ${fistName} ${lastName}</p>
    <p>${phoneEmail}</p>
    <p>${birthDate}</p>
    <p>${gender}</p>
  `;
  rightCont.appendChild(newCont);
}

// let customGender = false;
// function gender() {
//   if (!customGender) {

//     customGender = true;
//   } else {

//   }
// }

document.getElementById('facebook-register').onclick = (evento) => {
  evento.preventDefault();
  if (validate()) {
    signUp();
  }
};
