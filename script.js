const btnLogin = document.getElementById('button-login');
const entradaEmail = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', () => {
  alert(entradaEmail.value);
});

const rqdFields = Object.values(document.getElementsByClassName('required'));
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneMail = document.getElementById('phone-email');
const birthdate = document.getElementById('birthdate');
const errorMessage = document.getElementById('error-message');
const genderCustom = document.getElementById('gender-custom');
let gender;

// https://stackoverflow.com/questions/8454079/toggle-displaynone-style-with-javascript
function toggleDisplay(e) {
  if (e.target.id === 'male' || e.target.id === 'female') {
    genderCustom.style.display = 'none';
  } else {
    genderCustom.style.display = '';
  }
}

function validate() {
  // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
  gender = document.querySelector('input[name="gender"]:checked');
  for (let i = 0; i < rqdFields.length; i += 1) {
    if (!rqdFields[i].value) {
      errorMessage.style.display = '';
      return false;
    }
  }
  if (gender) {
    // document.getElementById('error-message').style.display = 'none';
    return true;
  }
}

function clearRightContent() {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  document.querySelector('.right-content').textContent = '';
}

function newContent(e) {
  e.preventDefault();
  if (validate()) {
    let result = `Olá, ${firstname.value} ${lastname.value}<br />`;
    result += `${phoneMail.value}<br />${birthdate.value}<br />${gender.value}`;
    const content = document.createElement('p');
    content.id = 'new-content';
    content.innerHTML = result;
    clearRightContent();
    document.querySelector('.right-content').appendChild(content);
  }
}

genderCustom.style.display = 'none';
errorMessage.style.display = 'none';

// console.log(document.querySelector('input[name="gender"]:checked').value);
const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', newContent);

const rdMale = document.getElementById('male');
rdMale.addEventListener('change', toggleDisplay);

const rdFemale = document.getElementById('female');
rdFemale.addEventListener('change', toggleDisplay);

const rdOther = document.getElementById('other');
rdOther.addEventListener('change', toggleDisplay);
