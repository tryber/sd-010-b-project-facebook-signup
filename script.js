const radio = document.querySelectorAll('.radio');
const rightContent = document.querySelector('.right-content');
const signIn = document.querySelector('#button-login');
const submitBtn = document.getElementById('facebook-register');
const initialEl = document.querySelector('.initial');
const inputList = document.querySelectorAll('#register-form input');
const btn = document.getElementById('custom-gender');
const btn1 = document.getElementById('male-gender');
const btn2 = document.getElementById('female-gender');
const form = document.getElementById('register-form');
const register = document.getElementById('facebook-register');
const newInput = document.createElement('input');

function removeChild() {
  newInput.remove();
}

btn1.addEventListener('click', removeChild);
btn2.addEventListener('click', removeChild);

function addGender() {
  if (document.querySelector('#custom-gender').checked) {
    newInput.className = 'input-gender';
    form.insertBefore(newInput, register);
    newInput.id = 'newInput';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
  }
}

function checkNewInput() {
  if (!document.getElementById('newInput')) {
    addGender();
  }
}

btn.addEventListener('click', checkNewInput);

function getAttributes(array) {
  function inputsToShow(e) {
    const el = (e.type !== 'password');
    return el;
  }
  function rmGender(e) {
    const rad = e.type !== 'radio' || e.checked !== false;
    return rad;
  }

  const arr = [...array].filter(inputsToShow).filter(rmGender);
  return arr;
}

function showFields() {
  const dataList = getAttributes(inputList);
  const greetings = ` Olá, ${dataList[0].value} ${dataList[1].value}
    ${dataList[2].value}
    ${dataList[3].value}
    ${dataList[4].value} `;
  rightContent.innerText = greetings;
  initialEl.style.display = 'none';
}

function validateDate() {
  const dataStr = inputList[4].value;
  const dataArr = dataStr.split('/');
  const d = parseInt(dataArr[0], 10);
  const m = parseInt(dataArr[1], 10);
  const y = parseInt(dataArr[2], 10);
  const bool = (d > 0 && d <= 31) && (m > 0 && m <= 12) && (y > 0);

  return bool;
}

function validateForm(event) {
  event.preventDefault();
  const genCheck = (radio[0].checked || radio[1].checked) || radio[2].checked;
  let count = 0;

  inputList.forEach((el) => {
    if (el.value === '') {
      count += 1;
    }
  });
  const booleans = [(count <= 3), genCheck, validateDate()];

  if (booleans.every((el) => el === true)) { showFields(); } else {
    document.querySelector('.required').innerText = 'Campos inválidos';
  }
}

function alert1() {
  const login = document.getElementById('user-email-phone').value;
  alert(login);
}

function load() {
  signIn.addEventListener('click', alert1);
  submitBtn.addEventListener('click', validateForm);
}

window.onload = function start() {
  load();
};
