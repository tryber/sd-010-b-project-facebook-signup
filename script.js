const email = document.getElementById('user-email-phone');
const buttonLogin = document.getElementById('button-login');
const buttonSubmit = document.querySelector('#facebook-register');
const forms = document.querySelectorAll('#forms input');
const formsAll = document.querySelectorAll('#forms')[0];
const form = document.querySelector('#forms');
const error = document.querySelector('#erro-msg');
const rightContent = document.querySelector('.right-content');
const inputGender1 = document.querySelector(
  '.form-group-row > input[type=radio]:nth-child(1)',
);
const inputGender2 = document.querySelector(
  '.form-group-row > input[type=radio]:nth-child(2)',
);
const inputGender3 = document.querySelector(
  '.form-group-row > input[type=radio]:nth-child(3)',
);
const inputGender4 = document.querySelector(
  'body > main > div > div.right-content > form > div:nth-child(4) > input',
);
/* ----------------------------------------------------------------------------- */

const getEmailValue = () => alert(email.value);
const genderAdd = () => inputGender4.classList.remove('disable');
const genderRemove = () => inputGender4.classList.add('disable');

const check = () => {
  [...forms].forEach((index) => {
    if (index.value === '' && index.name !== 'gender-custom') {
      error.classList.remove('disable');
    }
  });
};

const insertInfo = (e) => {
  e.preventDefault();
  let gender = '';
  [...forms].forEach((index) => {
    if (index.checked) gender = index.value;
  });
  rightContent.innerHTML = `
  <h1>Olá, ${formsAll[0].value} ${formsAll[1].value}</h1>
  <p>Login: ${formsAll[2].value}</p>
  <p>Data de nascimento: ${formsAll[4].value}</p>
  <p>Sexo: ${gender}</p>`;
};

buttonLogin.addEventListener('click', getEmailValue);
inputGender1.addEventListener('click', genderRemove);
inputGender2.addEventListener('click', genderRemove);
inputGender3.addEventListener('click', genderAdd);
form.addEventListener('submit', insertInfo);
buttonSubmit.addEventListener('click', check);
