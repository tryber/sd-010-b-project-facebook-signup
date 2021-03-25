function emailTelephoneAlert() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}

let clicked = false;
function customGender() {
  if (clicked === false){
    const parent = document.getElementsByClassName('genders')[0];
    const custom = document.createElement('input');
    custom.name = 'gender-custom';
    custom.placeholder = 'Gênero (opcional)';
    custom.id = 'customGender';
    parent.appendChild(custom);
    document.body.removeEventListener('click', customGender);
  }
  clicked = true;
}

// function removeCustomGender() {
//   const fem = document.getElementById('feminino');
//   const masc = document.getElementById('masculino');
//   if ((fem.checked === true) || (masc.checked === true)) {
//     console.log('okay');
//     // const parent = document.getElementsByClassName('genders')[0];
//   }
// }

window.onload = function () {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', emailTelephoneAlert);

  const genderCustom = document.getElementById('custom-gender');
  genderCustom.addEventListener('click', customGender);

  // const feminino = document.getElementById('feminino');
  // feminino.addEventListener('click', removeCustomGender);

  // const masculino = document.getElementById('masculino');
  // masculino.addEventListener('click', removeCustomGender);
};
